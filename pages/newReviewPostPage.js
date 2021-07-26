import { css } from '@emotion/react';
import Error from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Horizontal from '../components/RangeSlider';
import {
  getDistricts,
  getUserById,
  getValidSessionByToken,
} from '../util/database';

const backgroundColor = css`
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -30000;
  height: 100%;
  width: 100%;
  margin-top: -50px;
  margin-bottom: -100px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    padding-right: -15px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    padding-right: -15px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 5px;
    padding-right: 15px;
  }
`;

const formStyle = css`
  margin-left: 20px;
  max-width: 1500px;
  margin: auto;
  display: block;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
`;

const firstDiv = css`
  display: flex;
  margin-left: 40px;
  width: 100%;
  margin-top: 50px;
  height: 100%;
  max-height: 200px;
  margin-bottom: 50px;
  position: relative;
  padding-top: 50px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 20px;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: -20px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 20px;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: -20px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 20px;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: -20px;
  }

  > label {
    font-size: 20px;
    color: #0bc6d2;
    @media screen and (max-width: 1024px) {
      margin-bottom: 20px;
      padding-right: 20px;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
      padding-right: 20px;
    }
    @media screen and (max-width: 450px) {
      margin-bottom: 20px;
    }

    > span {
      color: red;
    }
  }

  > label > input {
    display: block;
    margin-right: 50px;
    width: 500px;
    height: 40px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid #0bc6d2;
    transition: 0.3s ease-in-out;
    @media screen and (max-width: 1024px) {
      width: 90%;
      margin-right: 10px;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
      margin-right: 10px;
    }
    @media screen and (max-width: 450px) {
      width: 90%;
      margin-right: 10px;
    }

    ::placeholder {
      color: gray;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }

  > label + label > input {
    display: block;
    margin-right: 80px;
    width: 150px;
    height: 40px;
    @media screen and (max-width: 1024px) {
      width: 50%;
    }
    @media screen and (max-width: 768px) {
      width: 50%;
    }
    @media screen and (max-width: 450px) {
      width: 50%;
    }
  }

  > label > select {
    display: block;
    width: 500px;
    height: 40px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid #0bc6d2;
    transition: 0.3s ease-in-out;
    color: gray;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      width: 70%;
    }
    @media screen and (max-width: 450px) {
      width: 70%;
    }

    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
    :required {
      border: 1px solid #0bc6d2;
      transition: 0.3s ease-in-out;
      color: gray;
    }

    :valid:required {
      border: 1px solid #0bc6d2;
      transition: 0.3s ease-in-out;
      color: gray;
    }
    :invalid {
      box-shadow: 1px solid #0bc6d2;
      :required {
        box-shadow: 0 0 10px red;
      }
    }
  }
`;

const categorySection = css`
  display: block;
  max-width: 1500px;
  margin: auto;
  justify-content: center;
  margin-bottom: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 50px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 50px;
  }

  > div {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      width: 90%;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
      flex-direction: column;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
      flex-direction: column;
    }
    @media screen and (max-width: 450px) {
      width: 90%;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
      flex-direction: column;
    }

    > span {
      width: 500px;
      padding-top: 10px;
      padding-right: 20px;
      margin-bottom: 20px;
      @media screen and (max-width: 1024px) {
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
      }
      @media screen and (max-width: 450px) {
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
      }

      > h2 {
        color: #0bc6d2;
        padding-bottom: 10px;
        margin-bottom: 10px;
        @media screen and (max-width: 1024px) {
          width: 100%;
          margin-left: -10px;
          margin-right: 10px;
          margin-bottom: 10px;
          margin-top: 80px;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          margin-left: -10px;
          margin-right: 10px;
          margin-bottom: 10px;
          margin-top: 80px;
        }
        @media screen and (max-width: 450px) {
          width: 100%;
          margin-left: -10px;
          margin-right: 10px;
          margin-bottom: 10px;
          margin-top: 80px;
        }
      }

      > h4 {
        color: gray;
        text-align: center;
      }
    }

    > div + div {
      height: 150px;
    }

    > span + span {
      margin-left: 50px;
      width: 800px;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      @media screen and (max-width: 450px) {
        width: 100%;
      }

      > h2 {
        @media screen and (max-width: 1024px) {
          width: 100%;
          margin-top: -20px;
          margin-left: -50px;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          margin-top: -20px;
          margin-left: -50px;
        }
        @media screen and (max-width: 450px) {
          width: 100%;
          margin-top: -20px;
          margin-left: -50px;
        }
      }

      > textarea {
        border: 1px solid #0bc6d2;
        width: 700px;
        height: 120px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        transition: 0.3s ease-in-out;
        background-color: transparent;
        color: gray;
        font-size: 16px;
        font-weight: normal;
        @media screen and (max-width: 1024px) {
          width: 100%;
          margin-left: -40px;
          margin-bottom: -20px;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          margin-left: -40px;
          margin-bottom: -20px;
        }
        @media screen and (max-width: 450px) {
          width: 100%;
          margin-left: -40px;
          margin-bottom: -20px;
        }

        :focus {
          box-shadow: 0 0 10px rgba(11, 198, 210, 1);
          outline: none !important;
        }
        ::placeholder {
          border: none;
          color: #ddd;
        }
      }
    }
  }
`;

const submitButton = css`
  max-width: 1200px;
  width: 100%;
  height: 100px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  //padding-bottom: 50px;
  text-align: right;
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    padding-bottom: 100px;
    padding-right: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    padding-bottom: 100px;
    padding-right: 40px;
  }
  @media screen and (max-width: 450px) {
    margin-top: 50px;
    padding-bottom: 100px;
    padding-right: 20px;
    width: 100%;
  }

  > button {
    width: 200px;
    height: 50px;
    padding: 15px 15px;
    text-align: center;
    background-color: #0bc6d2;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    box-shadow: 0px 2px 2px gray;
    margin-right: 20px;
    margin-left: auto;
    @media screen and (max-width: 450px) {
      width: 40%;
    }
    :hover {
      background-color: #fed648;
      color: #583dfd;
    }
    :disabled {
      background-color: #ddd;
      color: #fff;
    }
  }

  > button + button {
    width: 200px;
    height: 50px;
    padding: 15px 15px;
    text-align: center;
    background-color: #ddd;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    box-shadow: 0px 2px 2px gray;
    margin-right: 20px;
    @media screen and (max-width: 450px) {
      width: 40%;
    }

    :hover {
      background-color: gray;
      color: #fff;
    }
  }
`;

const infoTextStyle = css`
  float: left;
  margin: auto;
  margin-right: 20px;
  display: grid;
  grid-auto-columns: 20% 80%;
  column-gap: 40px;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  @media screen and (max-width: 270px) {
    width: 100%;
  }

  > div {
    display: flex;
    width: 100%;
    margin-left: 60px;
    margin-top: -20px;
    @media screen and (max-width: 1024px) {
      width: 100%;
      margin-left: -10px;
      margin-top: -80px;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-left: -10px;
      margin-top: -80px;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
      margin-left: -10px;
      margin-top: -80px;
    }
    @media screen and (max-width: 270px) {
      width: 100%;
      margin-left: -10px;
      margin-top: -80px;
    }
  }

  > div > div > span {
    width: 30px;
    height: 30px;
    color: #0bc6d2;
    margin: auto;
    margin-right: 10px;

    > i {
      font-size: 20px;
      margin: auto;
      margin-left: 18px;
    }
  }
  > div > div > p {
    text-align: left;
    font-size: 16px;
    color: gray;
    width: 400px;
    margin-top: 2px;
    > span {
      font-weight: bold;
      margin-right: 5px;
    }
  }
`;

export default function NewReviewPost(props) {
  const router = useRouter();

  const [streetName, setStreetName] = useState('');
  const [houseNumber, setHouseNumber] = useState(5);
  const [district, setDistrict] = useState('');

  const [safetyScore, setSafetyScore] = useState(5);
  const [safetyComment, setSafetyComment] = useState('');

  const [parksScore, setParksScore] = useState(5);
  const [parksComment, setParksComment] = useState('');

  const [shoppingScore, setShoppingScore] = useState(5);
  const [shoppingComment, setShoppingComment] = useState('');

  const [kidsFriendlyScore, setKidsFriendlyScore] = useState(5);
  const [kidsFriendlyComment, setKidsFriendlyComment] = useState('');

  const [publicTransportScore, setPublicTransportScore] = useState(5);
  const [publicTransportComment, setPublicTransportComment] = useState('');

  const [diningScore, setDiningScore] = useState(5);
  const [diningComment, setDiningComment] = useState('');

  const [entertainmentScore, setEntertainmentScore] = useState(5);
  const [entertainmentComment, setEntertainmentComment] = useState('');

  const [noiseLevelScore, setNoiseLevelScore] = useState(5);
  const [noiseLevelComment, setNoiseLevelComment] = useState('');

  const handleStreetNameChange = (event) =>
    setStreetName(event.currentTarget.value);
  const handleHouseNumberChange = (event) =>
    setHouseNumber(event.currentTarget.value);

  const handleDistrictChange = (event) =>
    setDistrict(event.currentTarget.value);

  const handleSafetyCommentChange = (event) =>
    setSafetyComment(event.currentTarget.value);

  const handleParksCommentChange = (event) =>
    setParksComment(event.currentTarget.value);

  const handleShoppingCommentChange = (event) =>
    setShoppingComment(event.currentTarget.value);

  const handleKidsFriendlyCommentChange = (event) =>
    setKidsFriendlyComment(event.currentTarget.value);

  const handlePublicTransportCommentChange = (event) =>
    setPublicTransportComment(event.currentTarget.value);

  const handleDiningCommentChange = (event) =>
    setDiningComment(event.currentTarget.value);

  const handleEntertainmentCommentChange = (event) =>
    setEntertainmentComment(event.currentTarget.value);

  const handleNoiseLevelCommentChange = (event) =>
    setNoiseLevelComment(event.currentTarget.value);

  if (props.errors) {
    return (
      <Layout>
        <Error statusCode={404} />
      </Layout>
    );
  }

  return (
    <Layout firstName={props.user.firstName} username={props.user.username}>
      <Head>
        <title>
          {props.user.firstName} {props.user.lastName}
        </title>
      </Head>
      <div css={backgroundColor}>
        <form>
          <div css={formStyle}>
            <div css={firstDiv}>
              <label>
                Street name
                <input
                  data-cy="review-type-street-name"
                  placeholder="Street Name"
                  onChange={handleStreetNameChange}
                />
              </label>
              <label>
                House number
                <input
                  data-cy="review-type-house-number"
                  placeholder="House #"
                  onChange={handleHouseNumberChange}
                />
              </label>
              <label>
                District <span>*</span> (required)
                <select
                  name="func"
                  onChange={handleDistrictChange}
                  required
                  data-cy="review-select-district-from-dropdown"
                >
                  <option value="">Please select district</option>
                  {props.districts.map((districtInstance) => (
                    <option
                      key={districtInstance.zip}
                      value={districtInstance.zip}
                    >
                      {districtInstance.zip}&nbsp;
                      {districtInstance.districtName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div css={categorySection}>
            <div>
              <span>
                <h2>Rate your hood below</h2>
              </span>
              <span>
                <h2>Write a comment for each category</h2>
              </span>
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
                    <span>Tip:</span> move the slider to set the rating between
                    1-10. Where 1 is very bad and 10 is very good.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span>
                <h4>Safety</h4>
                <Horizontal
                  data_cy="review-safety-slider"
                  onChangeComplete={setSafetyScore}
                  initial={safetyScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-safety-comment"
                  placeholder="What is your take on safety in your neighborhood?"
                  onChange={handleSafetyCommentChange}
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal
                  onChangeComplete={setParksScore}
                  initial={parksScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-parks-comment"
                  placeholder="Are there enough parks around your neighborhood?"
                  onChange={handleParksCommentChange}
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Shopping</h4>
                <Horizontal
                  onChangeComplete={setShoppingScore}
                  initial={shoppingScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-shopping-comment"
                  placeholder="How far are the shops (eg. groceries, clothing, etc)?"
                  onChange={handleShoppingCommentChange}
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Kids Friendly</h4>
                <Horizontal
                  onChangeComplete={setKidsFriendlyScore}
                  initial={kidsFriendlyScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-kids-comment"
                  placeholder="Are there enough playgrounds, schools and kindergartens in the area?"
                  onChange={handleKidsFriendlyCommentChange}
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Public Transport</h4>
                <Horizontal
                  onChangeComplete={setPublicTransportScore}
                  initial={publicTransportScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-transport-comment"
                  placeholder="Are you well connected to public transport?"
                  onChange={handlePublicTransportCommentChange}
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Dining</h4>
                <Horizontal
                  onChangeComplete={setDiningScore}
                  initial={diningScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-dining-comment"
                  placeholder="Does the foodie in you feel well fed in the neighborhood?"
                  onChange={handleDiningCommentChange}
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Entertainment</h4>
                <Horizontal
                  onChangeComplete={setEntertainmentScore}
                  initial={entertainmentScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-entertainment-comment"
                  placeholder="Are there fun things to do in your neighborhood (eg. cinemas, pubs, clubs, etc.)?"
                  onChange={handleEntertainmentCommentChange}
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Noise Comfort</h4>
                <Horizontal
                  onChangeComplete={setNoiseLevelScore}
                  initial={noiseLevelScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-noise-comment"
                  placeholder="Is your neighborhood quiet?"
                  onChange={handleNoiseLevelCommentChange}
                />
              </span>
            </div>
          </div>
          <div css={submitButton}>
            <button
              data-cy="review-submit-new-review-button"
              disabled={district === '' ? 'disabled' : ''}
              onClick={async (event) => {
                event.preventDefault();

                const response = await fetch(`/api/reviews`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    userId: props.user.id,

                    streetName: streetName,
                    houseNumber: houseNumber,
                    district: district,

                    safetyScore: safetyScore,
                    safetyComment: safetyComment,

                    parksScore: parksScore,
                    parksComment: parksComment,

                    shoppingScore: shoppingScore,
                    shoppingComment: shoppingComment,

                    kidsFriendlyScore: kidsFriendlyScore,
                    kidsFriendlyComment: kidsFriendlyComment,

                    publicTransportScore: publicTransportScore,
                    publicTransportComment: publicTransportComment,

                    diningScore: diningScore,
                    diningComment: diningComment,

                    entertainmentScore: entertainmentScore,
                    entertainmentComment: entertainmentComment,

                    noiseLevelScore: noiseLevelScore,
                    noiseLevelComment: noiseLevelComment,

                    csrfToken: props.csrfToken,
                  }),
                });
                await response.json();
                router.push(`/profiles/${props.user.username}/?view=posts`);
              }}
            >
              Submit Review
            </button>
            <button
              data-cy="cancel-writting-review-button"
              onClick={(event) => {
                event.preventDefault();
                router.push(`/profiles/${props.user.username}/?view=posts`);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
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
        destination: `https://${context.req.headers.host}/newReviewPostPage`,
        permanent: true,
      },
    };
  }

  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);
  const districts = await getDistricts();

  if (session) {
    const user = await getUserById(session.userId);
    return {
      props: { user: user, districts: districts },
    };
  } else {
    return { props: { errors: 'no session', districts: districts } };
  }
}
