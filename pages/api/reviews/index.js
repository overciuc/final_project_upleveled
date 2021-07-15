// Since all files in the API folder
// are server-side only, we can import from
// the database statically at the top
import {
  getDistrictByZip,
  getUserPosts,
  insertReview,
} from '../../../util/database';
import { formAddressFromInput, getGeocode } from '../../../util/helpers';

// An API Route needs to define the response
// that is returned to the user
export default async function reviewsHandler(req, res) {
  if (req.method === 'GET') {
    const reviews = await getUserPosts();
    return res.status(200).json({ reviews: reviews });
  } else if (req.method === 'POST') {
    const {
      userId,

      streetName,
      houseNumber,
      district,

      safetyScore,
      safetyComment,

      parksScore,
      parksComment,

      shoppingScore,
      shoppingComment,

      kidsFriendlyScore,
      kidsFriendlyComment,

      publicTransportScore,
      publicTransportComment,

      diningScore,
      diningComment,

      entertainmentScore,
      entertainmentComment,

      noiseLevelScore,
      noiseLevelComment,
    } = req.body;

    const address = await formAddressFromInput(
      district,
      streetName,
      houseNumber,
    );
    let [latitude, longitude, confidence] = await getGeocode(address);

    // if street does not match, fallback to district name
    if (confidence < 0.9) {
      const districtRecord = await getDistrictByZip(district);
      const districtName = districtRecord.districtName;
      [latitude, longitude, confidence] = await getGeocode(
        `${districtName} Vienna Austria`,
      );
    }

    const review = await insertReview(
      userId,

      streetName,
      houseNumber,
      district,

      safetyScore,
      safetyComment,

      parksScore,
      parksComment,

      shoppingScore,
      shoppingComment,

      kidsFriendlyScore,
      kidsFriendlyComment,

      publicTransportScore,
      publicTransportComment,

      diningScore,
      diningComment,

      entertainmentScore,
      entertainmentComment,

      noiseLevelScore,
      noiseLevelComment,

      latitude,
      longitude,
    );
    return res.status(200).json({ review: review });
  }

  res.status(400).json(null);
}
