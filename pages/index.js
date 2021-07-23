import 'react-slideshow-image/dist/styles.css';
import 'leaflet/dist/leaflet.css';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { getIconDisplayFromCriteria } from '../util/misc';

const landingPageContainer = css`
  width: 100%;
  display: flex;
  position: relative;
  margin: auto;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    //margin-top: 170px;
    padding-right: 10px;
    width: 100%;
    margin-left: -60px;
    margin-bottom: 100px;
    overflow: hidden;
  }
`;

const radioButtonContainer = css`
  margin-left: 100px;
  margin-top: 30px;
  justify-content: center;
  width: 600px;
  @media (max-width: 900px) {
    width: 100%;
    float: left;
    padding-left: -50px;
    font-size: 18px;
    padding-right: 10px;
    justify-content: left;
  }

  > p {
    text-align: left;
    font-size: 24px;
    color: gray;
    width: 100%;
    @media (max-width: 900px) {
      font-size: 18px;
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      text-align: left;
    }
  }

  > h3 {
    color: gray;
    font-size: 30px;
    margin-top: 20px;
    width: 100%;
    @media (max-width: 900px) {
      font-size: 18px;
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  > div {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 40px;
    grid-template-rows: 1;
    @media (max-width: 900px) {
      font-size: 16px;
      width: 100%;
      padding-left: -20px;
      padding-right: 10px;
      column-gap: 1rem;
    }
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
    @media screen and (max-width: 900px) {
      font-size: 18px;
      margin-left: 10px;
    }
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
  @media (max-width: 900px) {
    padding-left: 0px;
    padding-right: 10px;
    padding-top: 20px;
    justify-content: center;
  }

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
    margin-top: 5px;

    > span {
      font-weight: bold;
    }
  }
`;

const frontPageMap = css`
  width: 1200px;
  height: 90vh;
  float: right;
  margin-left: auto;
  @media (max-width: 900px) {
    margin-left: 80px;
    padding-top: 20px;
    padding-left: 20px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const criteriaIconStyle = css`
  width: 600px;
  height: 300px;
  justify-content: center;
  margin: auto;
  text-align: center;
  margin-left: 120px;
  @media (max-width: 900px) {
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center;
    //margin: auto;
  }

  > i {
    font-size: 200px;
    margin: auto;
    color: #0bc6d2;
    opacity: 0.5;
  }
`;
/*
const attributionStyle = css`
  width: 600px;
  margin: auto;
  float: right;
  margin-right: 0px;
  @media (max-width: 900px) {
    padding-top: 20px;
    padding-right: 10px;
    padding-left: 10px;
    //margin: auto;
    justify-content: center;
  }
  > p {
    width: 100%;
    font-size: 10px;
    color: gray;
    margin-left: 150px;
    @media (max-width: 900px) {
      padding-right: 20px;
      margin-left: 50px;
    }
    > a {
      text-decoration: none;
      color: gray;
    }
  }
`;
*/
export default function Home(props) {
  useEffect(() => props.refreshUserinfo(), [props]);

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
          <h3>Visualize your hood based on ...</h3>
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
                  <span>Tip:</span> Click on a marker for more info.
                </p>
              </div>
            </div>
          </div>

          <div css={criteriaIconStyle}>
            {getIconDisplayFromCriteria(showSelection)}
          </div>
          {/*
          <div css={attributionStyle}>
            <p>
              Icons made by&nbsp;
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>
              &nbsp; from &nbsp;
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </p>
          </div>
          */}
        </div>

        <div css={frontPageMap}>
          <Map
            // data-cy="find-marker-on-map"
            allReviews={props.allReviews}
            showSelectionOnMap={showSelection}
          />
        </div>
      </section>

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/index`,
        permanent: true,
      },
    };
  }

  const response = await fetch(
    `${process.env.API_BASE_URL}/reviews/all_reviews`,
    {
      method: 'GET',
    },
  );

  const aggregatedReviews = await response.json();

  return {
    props: { allReviews: aggregatedReviews },
  };
}
