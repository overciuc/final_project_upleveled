import argon2 from 'argon2';
// Since all files in the API folder
// are server-side only, we can import from
// the database statically at the top
import { getUsers, insertUser } from '../../../util/database';

// An API Route needs to define the response
// that is returned to the user
export default async function usersHandler(req, res) {
  if (req.method === 'GET') {
    const users = await getUsers();
    return res.status(200).json({ users: users });
  } else if (req.method === 'POST') {
    const { firstName, lastName, username, password } = req.body;
    const passwordHash = await argon2.hash(password);

    const user = await insertUser(firstName, lastName, username, passwordHash);
    return res.status(200).json({ user: user });
  }

  res.status(400).json(null);
}
