import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const sliderContainer = css`
  width: 1400px;
  display: flex;
  position: relative;
  margin: auto;
  justify-content: center;
  height: 500px;
  border: 2px solid black;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <section css={sliderContainer}>ghf</section>

      <Footer />
    </Layout>
  );
}
