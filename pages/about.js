import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const backgroundColor = css`
  background-repeat: no-repeat;
  background-size: cover;
  background: #0bc6d2;
  justify-content: center;
  width: 100%;
  min-height: auto;
  min-height: 950px;
  margin-top: -100px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -10;
  content: '';
`;

export default function ContactUs(props) {
  return (
    <Layout
      firstName={props.firstNameFromFetch}
      username={props.usernameFromFetch}
    >
      <Head>
        <title>Contact</title>
      </Head>

      <section css={backgroundColor}></section>

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
