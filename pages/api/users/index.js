import argon2 from 'argon2';
import { convertQueryValueString } from '../../../util/context';
import { getUserByValidSessionToken, insertUser } from '../../../util/database';

// An API Route needs to define the response
// that is returned to the user
export default async function usersHandler(req, res) {
  if (req.method === 'GET') {
    const token = convertQueryValueString(req.cookies.sessionToken);
    const userFromSession = await getUserByValidSessionToken(token);
    return res.status(200).json({ user: userFromSession });
  } else if (req.method === 'POST') {
    const { firstName, lastName, email, username, password } = req.body;
    const passwordHash = await argon2.hash(password);

    const user = await insertUser(
      firstName,
      lastName,
      email,
      username,
      passwordHash,
    );
    return res.status(200).json({ user: user });
  }

  res.status(400).json(null);
}
