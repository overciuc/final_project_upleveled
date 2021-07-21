import { getDistrictByZip } from './database';

export async function getGeocode(query: string) {
  const geocodeApiKey = process.env.GEOCODE_API_KEY;
  const geocodeResponse = await fetch(
    `http://api.positionstack.com/v1/forward?access_key=${geocodeApiKey}&query=${encodeURIComponent(
      query,
    )}`,
    {
      method: 'GET',
    },
  );
  const geocodeJson = await geocodeResponse.json();
  if ('errors' in geocodeJson) {
    return [0, 0];
  } else {
    return [
      geocodeJson.data[0].latitude,
      geocodeJson.data[0].longitude,
      geocodeJson.data[0].confidence,
    ];
  }
}

export async function formAddressFromInput(
  district: number | string,
  streetName: string,
  houseNumber: string,
) {
  // Fetching district name from table districts in
  // database and forming an address from input for review
  const districtRecord = await getDistrictByZip(district);
  const districtName = districtRecord.districtName;

  let address = '';
  if (streetName && streetName !== '') {
    address = streetName;
    if (houseNumber && houseNumber !== '') {
      address = `${address} ${houseNumber}`;
    }
  }
  if (address !== '') {
    address = `${address} ${district} Vienna Austria`;
  } else {
    address = `${districtName} Vienna Austria`;
  }
  return address;
}

export function getRatingColor(rating: number) {
  const colors: string[] = [
    '#ff0000',
    '#fc3800',
    '#f86f00',
    '#f5a500',
    '#f2d900',
    '#d1ee00',
    '#9aeb00',
    '#64e800',
    '#2fe400',
    '#04db08',
  ];
  return colors[rating - 1];
}
