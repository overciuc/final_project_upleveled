exports.up = async function up(sql) {
  await sql`
  ALTER TABLE reviews
	ADD CONSTRAINT fk_districts
	FOREIGN KEY (district)
	REFERENCES districts (zip) ON DELETE CASCADE
  `;
};

exports.down = async function down(sql) {
  await sql`
    ALTER TABLE reviews
		DROP CONSTRAINT fk_districts
  `;
};
