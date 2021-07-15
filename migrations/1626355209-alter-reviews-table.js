exports.up = async function up(sql) {
  await sql`
	ALTER TABLE reviews
	ADD COLUMN longitude numeric;
  `;
  await sql`
  ALTER TABLE reviews
	ADD COLUMN latitude numeric;
  `;
};

exports.down = async function down(sql) {
  await sql`
    ALTER TABLE reviews
		DROP COLUMN latitude;
  `;
  await sql`
		ALTER TABLE reviews
		DROP COLUMN longitude;
  `;
};
