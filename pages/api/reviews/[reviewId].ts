import { NextApiRequest, NextApiResponse } from 'next';
import { convertQueryValue } from '../../../util/context';
import {
  deleteReviewById,
  getDistrictByZip,
  getUserPostById,
  updateReviewById,
} from '../../../util/database';
import { formAddressFromInput, getGeocode } from '../../../util/helpers';

export default async function singleReviewHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('HTTP Method (aka verb)', req.method);

  const reviewId = convertQueryValue(req.query.reviewId);

  if (req.method === 'GET') {
    const review = await getUserPostById(reviewId);
    return res.status(200).json({ review: review || null });
  } else if (req.method === 'PUT') {
    const {
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

    const review = await updateReviewById(
      reviewId,
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
    return res.status(200).json({ review: review || null });
  } else if (req.method === 'DELETE') {
    const review = await deleteReviewById(reviewId);
    return res.status(200).json({ review: review || null });
  }

  res.status(400).json(null);
}
