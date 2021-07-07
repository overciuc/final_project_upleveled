import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

// import { getUserById, getValidSessionByToken } from '../util/database';

export default function Blog(props) {
  return (
    <Layout
      firstName={props.firstNameFromFetch}
      username={props.usernameFromFetch}
    >
      <Head>
        <title>Blog</title>
      </Head>
      <br />
      <br />
      <br />
      <br />
      <section>Blog will be here shortly</section>
      <Footer />
    </Layout>
  );
}
/*
export async function getServerSideProps(context) {
  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);

  if (session) {
    const user = await getUserById(session.userId);
    return {
      props: { user: user },
    };
  } else {
    return { props: {} };
  }
}
*/
