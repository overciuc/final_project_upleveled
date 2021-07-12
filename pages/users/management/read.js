import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../../components/Layout';

export default function ReadAllUsers(props) {
  const [users, setUsers] = useState(props.users);
  return (
    <Layout>
      <Head>
        <title>Read page for all users</title>
      </Head>

      <h1>Read Page for all users</h1>

      {users.map((user) => {
        return (
          <div
            key={`user-${user.id}`}
            data-cy={`users-management-read-page-user-${user.firstName}-${user.lastName}`}
            style={{
              padding: 10,
              border: '1px solid #666',
              borderRadius: 4,
              marginBottom: 10,
            }}
          >
            <div>id: {user.id}</div>
            <div>first_name: {user.firstName}</div>
            <div>last_name: {user.lastName}</div>

            <div>
              <Link href={`/users/management/${user.id}/read`}>
                <a>Read page</a>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link href={`/users/management/${user.id}/update`}>
                <a>Update page</a>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <button
                onClick={async () => {
                  if (
                    !window.confirm(
                      `Really delete user ${user.firstName} ${user.lastName}?`,
                    )
                  ) {
                    return;
                  }

                  const response = await fetch(`/api/users/${user.id}`, {
                    method: 'DELETE',
                  });
                  const { user: deletedUser } = await response.json();
                  alert(
                    `Deleted user ${deletedUser.firstName} ${deletedUser.lastName}`,
                  );
                  setUsers(users.filter(({ id }) => id !== deletedUser.id));
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/read`,
        permanent: true,
      },
    };
  }

  const response = await fetch(`${process.env.API_BASE_URL}/users`);
  const { users } = await response.json();

  return {
    props: {
      users: users,
    },
  };
}
