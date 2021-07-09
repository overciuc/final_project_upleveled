import 'react-slideshow-image/dist/styles.css';
import 'leaflet/dist/leaflet.css';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const landingPageContainer = css`
  width: 100%;
  display: flex;
  position: relative;
  margin: auto;
  justify-content: center;
  height: 900px;
`;

const radioButtonContainer = css`
  margin-left: 100px;
  margin-top: 50px;
  justify-content: center;

  > p {
    text-align: left;
    font-size: 24px;
    color: gray;
    width: 600px;
  }

  > h3 {
    color: gray;
    font-size: 30px;
  }
  > div {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 40px;
    grid-template-rows: 1;
  }

  > div > div {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  > div > label {
    display: flex;
    user-select: none;
    margin: auto;
    :checked {
      color: black;
    }
    :checked:after {
      color: black;
    }
  }

  > div > div > label > span {
    text-align: center;
    height: 50px;
    margin-left: 20px;
    font-size: 24px;
    color: gray;
  }

  > div > div > label > input {
    -webkit-appearance: none;
    background-color: #fafafa;
    border: 1px solid #0bc6d2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 12px 12px 12px 12px;
    border-radius: 3px;
    position: relative;
    :active,
    :checked:active {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
    :checked {
      border: 1px solid #0bc6d2;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
        inset 15px 10px -12px rgba(255, 255, 255, 0.1);
      color: red;
    }
    :checked:after {
      content: '';
      font-size: 18px;
      position: absolute;
      margin: auto;
      top: 5px;
      left: 5px;
      bottom: 5px;
      right: 5px;
      background-color: #0bc6d2;
    }
  }
`;

const infoTextStyle = css`
  float: left;
  margin: auto;
  margin-right: 20px;
  margin-top: 30px;
  display: grid;
  grid-auto-columns: 20% 80%;
  column-gap: 40px;
  justify-content: center;

  > div {
    display: flex;
    width: 100%;
    margin-left: 20px;
  }

  > div > div > span {
    width: 50px;
    height: 50px;
    color: #0bc6d2;
    margin: auto;
    margin-right: 20px;

    > i {
      font-size: 30px;
      margin: auto;
    }
  }
  > div > div > p {
    text-align: left;
    font-size: 24px;
    color: gray;
    width: 600px;
    margin-top: 0px;
  }
`;

const frontPageMap = css`
  width: 1200px;
  height: 880px;
  float: right;
  margin-left: auto;
`;

export default function Home(props) {
  const [showSelection, setShowSelection] = useState('safety');

  const handleChangeSafety = (event) => {
    if (event.currentTarget.value === 'on') {
      setShowSelection('safety');
    }
  };

  const handleChangeParks = (event) => {
    if (event.currentTarget.value === 'on') {
      setShowSelection('parks');
    }
  };

  const handleChangeShopping = (event) => {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === 'on') {
      setShowSelection('shopping');
    }
  };

  const handleChangeKidsFriendly = (event) => {
    if (event.currentTarget.value === 'on') {
      setShowSelection('kids_friendly');
    }
  };

  const handleChangePublicTransport = (event) => {
    if (event.currentTarget.value === 'on') {
      setShowSelection('public_transport');
    }
  };

  const handleChangeDining = (event) => {
    if (event.currentTarget.value === 'on') {
      setShowSelection('dining');
    }
  };

  const handleChangeEntertainment = (event) => {
    if (event.currentTarget.value === 'on') {
      setShowSelection('entertainment');
    }
  };

  const handleChangeNoiseLevel = (event) => {
    if (event.currentTarget.value === 'on') {
      setShowSelection('noise_level');
    }
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const Map = dynamic(
    () => import('../components/LeafletComponent'),

    {
      // This line is important. It's what prevents server-side render
      ssr: false,
    },
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
        <div css={radioButtonContainer}>
          <p>
            This map service will show you ratings in certain categories in
            every district, left by people that actually leave there.
          </p>
          <h3>Select the category you are interested in</h3>
          <div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radio-group"
                  checked={showSelection === 'safety' ? 'checked' : ''}
                  onChange={handleChangeSafety}
                />
                <span>&nbsp;Safety</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radio-group"
                  checked={showSelection === 'parks' ? 'checked' : ''}
                  onChange={handleChangeParks}
                />
                <span>&nbsp;Parks</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radio-group"
                  checked={showSelection === 'shopping' ? 'checked' : ''}
                  onChange={handleChangeShopping}
                />
                <span>&nbsp;Shopping</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radio-group"
                  checked={showSelection === 'kids_friendly' ? 'checked' : ''}
                  onChange={handleChangeKidsFriendly}
                />
                <span>&nbsp;Kids Friendly</span>
              </label>
            </div>
          </div>
          <div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radio-group"
                  checked={
                    showSelection === 'public_transport' ? 'checked' : ''
                  }
                  onChange={handleChangePublicTransport}
                />
                <span>&nbsp;Public Transport</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radio-group"
                  checked={showSelection === 'dining' ? 'checked' : ''}
                  onChange={handleChangeDining}
                />
                <span>&nbsp;Dining</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radio-group"
                  checked={showSelection === 'entertainment' ? 'checked' : ''}
                  onChange={handleChangeEntertainment}
                />
                <span>&nbsp;Entertainment</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radio-group"
                  checked={showSelection === 'noise_level' ? 'checked' : ''}
                  onChange={handleChangeNoiseLevel}
                />
                <span>&nbsp;Noise Level</span>
              </label>
            </div>
          </div>
          <div css={infoTextStyle}>
            <div>
              <div>
                <span>
                  <i className="bi bi-info-square" />
                </span>
              </div>
              <div>
                <p>
                  If you click on a marker a popup window will appear with
                  information on average rating of the chosen category, district
                  and a link to the review itself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div css={frontPageMap}>
          <Map
            allReviews={props.allReviews}
            showSelectionOnMap={showSelection}
          />
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
  console.log(enrichedReviews);
  return {
    props: { allReviews: enrichedReviews },
  };
}
