import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import { ApplicationError, Session, User, UserWithPasswordHash } from './types';

// import postgres from 'postgres';

const postgres = require('postgres');

dotenvSafe.config();

declare module globalThis {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let __postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    sql = postgres();
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

const sql = connectOneTimeToDatabase();

export async function insertUser(
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  passwordHash: string,
) {
  const users = await sql`
    INSERT INTO users
      (first_name, last_name, email, username, password_hash)
    VALUES
      (${firstName}, ${lastName}, ${email}, ${username}, ${passwordHash})
    RETURNING
      id,
      first_name,
      last_name,
      email,
      username
  `;
  return users.map((user: any) => camelcaseKeys(user))[0];
}

export async function getUserById(id?: number) {
  // Return undefined if userId is not parseable
  // to an integer
  if (!id) return undefined;

  const users = await sql<[User]>`
    SELECT
      id,
      first_name,
      last_name,
      email,
      username
    FROM
      users
    WHERE
      id = ${id}
  `;
  return users.map((user: any) => camelcaseKeys(user))[0];
}

export async function getUserByUsername(username?: string) {
  // Return undefined if username is falsy
  if (!username) return undefined;

  const users = await sql<[User]>`
    SELECT
      id,
      first_name,
      last_name,
      email,
      username
    FROM
      users
    WHERE
      username = ${username}
  `;
  return users.map((user: any) => camelcaseKeys(user))[0];
}

export async function getUserWithPasswordHashByUsername(username?: string) {
  // Return undefined if username is falsy
  if (!username) return undefined;

  const users = await sql<[UserWithPasswordHash]>`
    SELECT
      *
    FROM
      users
    WHERE
      username = ${username}
  `;
  return users.map((user: any) => camelcaseKeys(user))[0];
}

export async function getUserByIdWithCourses(userId?: number) {
  // Return undefined if userId is not parseable
  // to an integer
  if (!userId) return undefined;

  const userCourses = await sql`
    SELECT
      users.id as user_id,
      users.first_name as user_first_name,
      users.last_name as user_last_name,
      courses.id as course_id,
      courses.title as course_title,
      courses.slug as course_slug
    FROM
      users,
      courses,
      users_courses
    WHERE
      users.id = ${userId} AND
      users.id = users_courses.user_id AND
      users_courses.course_id = courses.id
  `;
  return userCourses.map((user: any) => camelcaseKeys(user));
}

export async function updateUserById(
  userId: number | undefined,
  firstName: string,
  lastName: string,
) {
  if (!userId) return undefined;

  const users = await sql<[User]>`
    UPDATE
      users
    SET
      first_name = ${firstName},
      last_name = ${lastName}
    WHERE
      id = ${userId}
    RETURNING
      id,
      first_name,
      last_name,
      email,
      username
  `;
  return users.map((user: any) => camelcaseKeys(user))[0];
}

export async function deleteUserById(id?: number) {
  if (!id) return undefined;

  const users = await sql`
    DELETE FROM
      users
    WHERE
      id = ${id}
    RETURNING
      id,
      first_name,
      last_name,
      email,
      username
  `;
  return users.map((user: any) => camelcaseKeys(user))[0];
}

export async function getValidSessionByToken(token: string) {
  if (!token) return undefined;

  const sessions = await sql<Session[]>`
    SELECT
      *
    FROM
      sessions
    WHERE
      token = ${token} AND
      expiry > NOW()
  `;
  return sessions.map((session: any) => camelcaseKeys(session))[0];
}

export async function getUserByValidSessionToken(token: string) {
  if (!token) return undefined;

  const session = await getValidSessionByToken(token);

  if (!session) return undefined;

  return await getUserById(session.userId);
}

export async function insertSession(token: string, userId: number) {
  const sessions = await sql<Session[]>`
    INSERT INTO sessions
      (token, user_id)
    VALUES
      (${token}, ${userId})
    RETURNING *
  `;
  return sessions.map((session: any) => camelcaseKeys(session))[0];
}

export async function deleteExpiredSessions() {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      expiry < NOW()
    RETURNING *
  `;
  return sessions.map((session: any) => camelcaseKeys(session));
}

export async function deleteSessionByToken(token: string) {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      token = ${token}
    RETURNING *
  `;
  return sessions.map((session: any) => camelcaseKeys(session))[0];
}

export async function getUsers() {
  const users = await sql<User[]>`
    SELECT
      id,
      first_name,
      last_name,
      email,
      username
    FROM
      users
  `;
  return users.map((user: any) => camelcaseKeys(user));
}

export async function getUserByUsernameAndToken(
  username?: string,
  token?: string,
) {
  // Security: If the user is not logged in, we do not allow
  // access and return an error from the database function
  if (!token) {
    const errors: ApplicationError[] = [{ message: 'Access denied' }];
    return errors;
  }

  // Return undefined if username is falsy
  // (for example, an undefined or '' value for the username)
  if (!username) return undefined;

  // Security: Retrieve user via the session token
  const userFromSession = await getUserByValidSessionToken(token);

  // If there is either:
  // - no valid session matching the token
  // - no user matching the valid session
  // ...return undefined
  if (!userFromSession) return undefined;

  // Retrieve all matching users from database
  const users = await sql<[User | undefined]>`
    SELECT
      id,
      first_name,
      last_name,
      email,
      username
    FROM
      users
    WHERE
      username = ${username}
  `;

  // If we have no user, then return undefined
  const user = users[0];
  if (!user) return undefined;

  // Security: Match ids of session user with user
  // corresponding to requested username
  if (user.id !== userFromSession.id) {
    const errors: ApplicationError[] = [{ message: 'Access denied' }];
    return errors;
  }

  return camelcaseKeys(user);
}
