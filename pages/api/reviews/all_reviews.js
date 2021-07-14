// Since all files in the API folder
// are server-side only, we can import from
// the database statically at the top
import {
  getAggregatedScoresPerLocation,
  getReviewComments,
} from '../../../util/database';

// An API Route needs to define the response
// that is returned to the user
export default async function allReviewsHandler(req, res) {
  if (req.method === 'GET') {
    const reviews = await getAggregatedScoresPerLocation();
    const comments = await getReviewComments();
    // enrich the reviews with comments
    const enrichedReviews = reviews.map((review) => {
      const streetName = review.streetName;
      const houseNumber = review.houseNumber;
      const district = review.district;

      function MatchComment(comment) {
        if (
          comment.streetName === streetName &&
          comment.houseNumber === houseNumber &&
          comment.district === district
        ) {
          return true;
        } else {
          return false;
        }
      }

      review.comments = comments.filter(MatchComment);

      return review;
    });

    return res.status(200).json({ reviews: enrichedReviews });
  }
  res.status(400).json(null);
}
