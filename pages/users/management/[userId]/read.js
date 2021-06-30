import Head from 'next/head';
import Layout from '../../../../components/Layout';

export default function ReadSingleUser(props) {
  // Show message if user does not exist
  if (!props.user) {
    return (
      <Layout>
        <Head>
          <title>User not found!</title>
        </Head>
        User not found
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>
          Read page for {props.user.firstName} {props.user.lastName}
        </title>
      </Head>

      <h1 data-cy="users-management-read-page-h1">Read Page</h1>

      <div>
        id: <span data-cy="users-management-read-page-id">{props.user.id}</span>
      </div>
      <div>first_name: {props.user.firstName}</div>
      <div>last_name: {props.user.lastName}</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/users/${context.query.userId}`,
  );
  const { user } = await response.json();
  console.log('API decoded JSON from response', user);

  return {
    props: {
      user: user,
    },
  };
}
