const reviews = (idFromUser) => [
  {
    user_id: idFromUser,
    district: '1190',
    safety_score: '10',
    safety_comment: 'Very safe district',
    parks_score: '10',
    parks_comment: 'A lot of parks and green areas in the district',
    shopping_score: '7',
    shopping_comment:
      'One small shopping mall, but good distance to grocery stores',
    kids_friendly_score: '10',
    kids_friendly_comment:
      'Lots of parks and playgrounds in the area. Access to the river and the forest',
    public_transport_score: '10',
    public_transport_comment:
      'Good connections to the public transport, trains, Ubahn, busses and a tram that goes directly to the city center',
    dining_score: '8',
    dining_comment:
      'Good accessibility to a number of restaurants and heurigens in Grinzing area',
    entertainment_score: '5',
    entertainment_comment:
      'It is a sleeping district, closest entertainment is in Spittelau or Millenium City',
    noise_level_score: '8',
    noise_level_comment: 'If not facing a big road, it is very quiet',
  },

  {
    user_id: idFromUser,
    district: '1170',
    safety_score: '6',
    safety_comment:
      'Safety is average in this district. Depending how close to the Gurtel',
    parks_score: '5',
    parks_comment:
      'Number of parks depend on how close you are to the Gurtel, the closer you are the less parks you have',
    shopping_score: '4',
    shopping_comment:
      'One small shopping mall, but good distance to grocery stores',
    kids_friendly_score: '9',
    kids_friendly_comment:
      'Lots of parks and playgrounds in the area. Access to the forest',
    public_transport_score: '8',
    public_transport_comment:
      'Good connections to the public transport, trains, Ubahn, busses and a tram that goes directly to the city center',
    dining_score: '8',
    dining_comment: 'Good accessibility to a number of restaurants and bars',
    entertainment_score: '4',
    entertainment_comment:
      'It is a sleeping district, closest entertainment is in Spittelau or Millenium City, also Gurtel is not too far off',
    noise_level_score: '2',
    noise_level_comment: 'If not facing a big road, it is very quiet',
  },

  {
    user_id: idFromUser,
    district: '1050',
    safety_score: '4',
    safety_comment: 'Not a very safe district',
    parks_score: '6',
    parks_comment: 'Not so many parks or green areas in the district',
    shopping_score: '7',
    shopping_comment:
      'One small shopping mall, but good distance to grocery stores',
    kids_friendly_score: '7',
    kids_friendly_comment:
      'Some playgrounds and a bit of green areas, but not too many',
    public_transport_score: '8',
    public_transport_comment:
      'Good connections to the public transport, trains, Ubahn, busses and a tram that goes directly to the city center',
    dining_score: '8',
    dining_comment: 'Good accessibility to a number of restaurants and bars',
    entertainment_score: '7',
    entertainment_comment:
      'Good accessibility to the Gurtel, where there are plenty of bars and clubs',
    noise_level_score: '3',
    noise_level_comment:
      "Very noisy neighborhood, lot's of cars and due to bars, a lot of people",
  },

  {
    user_id: idFromUser,
    district: '1010',
    safety_score: '8',
    safety_comment:
      'It is the city center. It is fairly safe, but you have pick pockets and bar fights and stuff',
    parks_score: '10',
    parks_comment: 'A lot of parks and green areas in the district',
    shopping_score: '10',
    shopping_comment: 'Plenty of shops in this district',
    kids_friendly_score: '8',
    kids_friendly_comment:
      'It is the first district, therefore it is not exactly for kids, but there are still parks and things kids can do here',
    public_transport_score: '10',
    public_transport_comment:
      'Good connections to the public transport, trains, Ubahn, busses and a trams that go to all areas of the city',
    dining_score: '10',
    dining_comment:
      'All possible restaurants, bars and clubs are in this district',
    entertainment_score: '10',
    entertainment_comment:
      'Cinemas, bars, clubs, restaurants, boat trips and so on. Plenty of things to do for all ages',
    noise_level_score: '1',
    noise_level_comment:
      'Very noisy, due to traffic, clubs, bars, restaurants. It is the city center after all',
  },

  {
    user_id: idFromUser,
    district: '1020',
    safety_score: '5',
    safety_comment:
      'Not very safe district. Some crime closer the Prater park area.',
    parks_score: '10',
    parks_comment:
      'Huge Prater park with an amusement park and lots of playgrounds',
    shopping_score: '7',
    shopping_comment:
      'Shops are spread around the district, but grocery store are easily accessible',
    kids_friendly_score: '8',
    kids_friendly_comment:
      'Lots of parks and playgrounds in the area. Access to a huge Amusement park in Prater',
    public_transport_score: '10',
    public_transport_comment:
      'Good connections to the public transport, trains, Ubahn, busses and a trams',
    dining_score: '8',
    dining_comment: 'Good accessibility to a number of restaurants and bars',
    entertainment_score: '8',
    entertainment_comment:
      'Amusement park in Prater and easy access to the center for other types of entertainment',
    noise_level_score: '8',
    noise_level_comment:
      'Amusement park in Prater creates a lot of noise, also lots of cars and people',
  },
];

exports.up = async function up(sql) {
  // seed DB with a couple of reviews from jackfrost, our sample user
  const userQuery = await sql`select id from users where username='jackfrost'`;
  const idFromUser = userQuery[0].id;

  await sql`
		INSERT INTO reviews ${sql(
      reviews(idFromUser),
      'user_id',
      'district',
      'safety_score',
      'safety_comment',
      'parks_score',
      'parks_comment',
      'shopping_score',
      'shopping_comment',
      'kids_friendly_score',
      'kids_friendly_comment',
      'public_transport_score',
      'public_transport_comment',
      'dining_score',
      'dining_comment',
      'entertainment_score',
      'entertainment_comment',
      'noise_level_score',
      'noise_level_comment',
    )}
	`;
};

exports.down = async function down(sql) {
  await sql`
		DELETE FROM
			reviews
	`;
};
