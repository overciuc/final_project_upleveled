import { NextApiRequest, NextApiResponse } from 'next';
import { convertQueryValue } from '../../../util/context';
import {
  deleteUserById,
  getUserById,
  updateUserById,
} from '../../../util/database';

export default async function singleUserHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('HTTP Method (aka verb)', req.method);

  const userId = convertQueryValue(req.query.userId);

  if (req.method === 'GET') {
    const user = await getUserById(userId);
    return res.status(200).json({ user: user || null });
  } else if (req.method === 'PUT') {
    const user = await updateUserById(
      userId,
      req.body.firstName,
      req.body.lastName,
    );
    return res.status(200).json({ user: user || null });
  } else if (req.method === 'DELETE') {
    const user = await deleteUserById(userId);
    return res.status(200).json({ user: user || null });
  }

  res.status(400).json(null);
}
