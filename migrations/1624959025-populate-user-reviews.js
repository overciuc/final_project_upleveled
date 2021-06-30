const users = [
  {
    first_name: 'Jack',
    last_name: 'Frost',
    email: 'jackfrost@example.com',
    username: 'jackfrost',
    password_hash:
      '$argon2i$v=19$m=4096,t=3,p=1$yEk8npOLbF/L+R0xB/Chew$ibx32sPDTC4xRQnPUecs6hm9/uqFLgoZzODInNOegek',
  },
];

exports.up = async function up(sql) {
  // create asample user jackfrost
  await sql`
		INSERT INTO users ${sql(
      users,
      'first_name',
      'last_name',
      'email',
      'username',
      'password_hash',
    )}
	`;
};

exports.down = async function down(sql) {
  for (const user of users) {
    await sql`
		DELETE FROM
			users
		WHERE
			username = ${user.username}
	`;
  }
};
