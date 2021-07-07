// Since all files in the API folder
// are server-side only, we can import from
// the database statically at the top
import { getAllPosts } from '../../../util/database';

// An API Route needs to define the response
// that is returned to the user
export default async function allReviewsHandler(req, res) {
  if (req.method === 'GET') {
    const reviews = await getAllPosts();
    return res.status(200).json({ reviews: reviews });
  }
  res.status(400).json(null);
}
