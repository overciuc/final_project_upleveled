exports.up = async function up(sql) {
  await sql`
    CREATE TABLE districts (
      zip integer PRIMARY KEY ,
      district_name varchar(90) UNIQUE NOT NULL
    )
  `;
};

exports.down = async function down(sql) {
  await sql`
    DROP TABLE districts
  `;
};
