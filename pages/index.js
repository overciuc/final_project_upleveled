import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const landingPageContainer = css`
  width: 100%;
  display: flex;
  position: relative;
  margin: auto;
  justify-content: center;
  height: 900px;
  //border: 2px solid black;
`;

const frontPageMap = css`
  max-width: 1200px;
  width: 100%;
  max-height: 1000px;
  height: 100%;
  background-image: url('../images/3D-map-of-Vienna.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  float: right;
  margin-left: auto;
  margin-right: 0;
  margin-top: 50px;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <section css={landingPageContainer}>
        <div css={frontPageMap} />
      </section>

      <Footer />
    </Layout>
  );
}
