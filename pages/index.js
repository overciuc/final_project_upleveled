import 'react-slideshow-image/dist/styles.css';
import 'leaflet/dist/leaflet.css';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { Coordinates } from '../util/types';

const landingPageContainer = css`
  width: 100%;
  display: flex;
  position: relative;
  margin: auto;
  justify-content: center;
  height: 900px;
`;

const frontPageMap = css`
  width: 1200px;
  height: 800px;
  border: 1px solid black;
  float: right;
  margin-left: auto;
`;

export default function Home(props) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const Map = dynamic(
    () => import('../components/LeafletComponent'),

    {
      ssr: false,
    }, // This line is important. It's what prevents server-side render
  );
  return (
    <Layout
      firstName={props.firstNameFromFetch}
      username={props.usernameFromFetch}
    >
      <Head>
        <title>Home</title>
      </Head>
      <section css={landingPageContainer}>
        <div css={frontPageMap}>
          <Map allReviews={props.allReviews} />
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export async function getGeocode(query) {
  const geocodeApiKey = '7ba25a8e345e54f9332bb62f813d4c45';
  const geocodeResponse = await fetch(
    `http://api.positionstack.com/v1/forward?access_key=${geocodeApiKey}&query=${query}`,
    {
      method: 'GET',
    },
  );
  const geocodeJson = await geocodeResponse.json();
  return [geocodeJson.data[0].latitude, geocodeJson.data[0].longitude];
}

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_BASE_URL}/reviews/all_reviews`,
    {
      method: 'GET',
    },
  );
  const allReviews = await response.json();
  const enrichedReviews = [];

  await Promise.all(
    allReviews.reviews.map(async (review) => {
      const coordinates = await getGeocode(
        `${encodeURIComponent(review.districtName)} Vienna`,
      );
      review = { ...review, coordinates };
      enrichedReviews.push(review);

      return;
    }),
  );
  //console.log(enrichedReviews);
  return {
    props: { allReviews: enrichedReviews },
  };
}
