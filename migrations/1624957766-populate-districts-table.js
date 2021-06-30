const districts = [
  { zip: '1010', district_name: 'Innere Stadt' },
  { zip: '1020', district_name: 'Leopoldstadt' },
  { zip: '1030', district_name: 'Landstrasse' },
  { zip: '1040', district_name: 'Wieden' },
  { zip: '1050', district_name: 'Margareten' },
  { zip: '1060', district_name: 'Mariahilf' },
  { zip: '1070', district_name: 'Neubau' },
  { zip: '1080', district_name: 'Josefstadt' },
  { zip: '1090', district_name: 'Alsergrund' },
  { zip: '1100', district_name: 'Favoriten' },
  { zip: '1110', district_name: 'Simmering' },
  { zip: '1120', district_name: 'Meidling' },
  { zip: '1130', district_name: 'Hietzing' },
  { zip: '1140', district_name: 'Penzing' },
  { zip: '1150', district_name: 'Rudolfsheim-Fünfhaus' },
  { zip: '1160', district_name: 'Ottakring' },
  { zip: '1170', district_name: 'Hernals' },
  { zip: '1180', district_name: 'Währing' },
  { zip: '1190', district_name: 'Döbling' },
  { zip: '1200', district_name: 'Brigittenau' },
  { zip: '1210', district_name: 'Floridsdorf' },
  { zip: '1220', district_name: 'Donaustadt' },
  { zip: '1230', district_name: 'Liesing' },
];

exports.up = async function up(sql) {
  await sql`
		INSERT INTO districts ${sql(districts, 'zip', 'district_name')}
	`;
};

exports.down = async function down(sql) {
  for (const district of districts) {
    await sql`
		DELETE FROM
			districts
		WHERE
			zip = ${district.zip}
	`;
  }
};
