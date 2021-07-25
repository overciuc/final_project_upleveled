import { css } from '@emotion/react';
import Error from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Horizontal from '../../components/RangeSlider';
import {
  getDistricts,
  getUserById,
  getUserPostById,
  getValidSessionByToken,
} from '../../util/database';

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
`;

const formStyle = css`
  margin-left: 20px;
  max-width: 1500px;
  margin: auto;
  margin-bottom: 50px;
  display: block;
  @media screen and (max-width: 900px) {
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
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: -20px;
  }

  > label {
    font-size: 20px;
    color: #0bc6d2;
    @media screen and (max-width: 900px) {
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
    @media screen and (max-width: 900px) {
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
    @media screen and (max-width: 900px) {
      width: 70%;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }
`;

const categorySection = css`
  display: block;
  max-width: 1500px;
  margin: auto;
  justify-content: center;
  margin-bottom: 50px;
  @media screen and (max-width: 900px) {
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
    @media screen and (max-width: 900px) {
      width: 90%;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
      flex-direction: column;
      //margin-bottom: -40px;
    }

    > span {
      width: 500px;
      padding-top: 10px;
      padding-right: 20px;
      margin-bottom: 20px;
      @media screen and (max-width: 900px) {
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
      }

      > h2 {
        color: #0bc6d2;
        padding-bottom: 10px;
        margin-bottom: 10px;
        @media screen and (max-width: 900px) {
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
      @media screen and (max-width: 900px) {
        width: 100%;
      }
      > h2 {
        @media screen and (max-width: 900px) {
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
        @media screen and (max-width: 900px) {
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
  margin-bottom: 50px;
  text-align: right;
  @media screen and (max-width: 900px) {
    margin-top: 50px;
    padding-bottom: 100px;
    padding-right: 40px;
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

    :hover {
      background-color: #fed648;
      color: #583dfd;
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
  @media screen and (max-width: 900px) {
    width: 100%;
  }

  > div {
    display: flex;
    width: 100%;
    margin-left: 60px;
    margin-top: -20px;
    @media screen and (max-width: 900px) {
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

  const [streetName, setStreetName] = useState(props.review[0].streetName);
  const [houseNumber, setHouseNumber] = useState(props.review[0].houseNumber);
  const [district, setDistrict] = useState(props.review[0].district);

  const [safetyScore, setSafetyScore] = useState(props.review[0].safetyScore);
  const [safetyComment, setSafetyComment] = useState(
    props.review[0].safetyComment,
  );

  const [parksScore, setParksScore] = useState(props.review[0].parksScore);
  const [parksComment, setParksComment] = useState(
    props.review[0].parksComment,
  );

  const [shoppingScore, setShoppingScore] = useState(
    props.review[0].shoppingScore,
  );
  const [shoppingComment, setShoppingComment] = useState(
    props.review[0].shoppingComment,
  );

  const [kidsFriendlyScore, setKidsFriendlyScore] = useState(
    props.review[0].kidsFriendlyScore,
  );
  const [kidsFriendlyComment, setKidsFriendlyComment] = useState(
    props.review[0].kidsFriendlyComment,
  );

  const [publicTransportScore, setPublicTransportScore] = useState(
    props.review[0].publicTransportScore,
  );
  const [publicTransportComment, setPublicTransportComment] = useState(
    props.review[0].publicTransportComment,
  );

  const [diningScore, setDiningScore] = useState(props.review[0].diningScore);
  const [diningComment, setDiningComment] = useState(
    props.review[0].diningComment,
  );

  const [entertainmentScore, setEntertainmentScore] = useState(
    props.review[0].entertainmentScore,
  );
  const [entertainmentComment, setEntertainmentComment] = useState(
    props.review[0].entertainmentComment,
  );

  const [noiseLevelScore, setNoiseLevelScore] = useState(
    props.review[0].noiseLevelScore,
  );
  const [noiseLevelComment, setNoiseLevelComment] = useState(
    props.review[0].noiseLevelComment,
  );

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
                  placeholder="Street Name"
                  onChange={handleStreetNameChange}
                  defaultValue={streetName}
                />
              </label>
              <label>
                House number
                <input
                  placeholder="House #"
                  onChange={handleHouseNumberChange}
                  defaultValue={houseNumber}
                />
              </label>
              <label>
                District
                <select onChange={handleDistrictChange}>
                  {props.districts.map((districtInstance) => (
                    <option
                      key={districtInstance.zip}
                      selected={
                        district === districtInstance.zip ? 'selected' : ''
                      }
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
                <h2>Write a review for each category</h2>
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
                  data_cy="check-slider-value"
                  onChangeComplete={setSafetyScore}
                  initial={safetyScore}
                />
              </span>
              <span>
                <textarea
                  data-cy="review-edit-safety-comment"
                  placeholder="Write your review here"
                  onChange={handleSafetyCommentChange}
                  defaultValue={safetyComment}
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
                  placeholder="Write your review here"
                  onChange={handleParksCommentChange}
                  defaultValue={parksComment}
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
                  placeholder="Write your review here"
                  onChange={handleShoppingCommentChange}
                  defaultValue={shoppingComment}
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
                  placeholder="Write your review here"
                  onChange={handleKidsFriendlyCommentChange}
                  defaultValue={kidsFriendlyComment}
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
                  placeholder="Write your review here"
                  onChange={handlePublicTransportCommentChange}
                  defaultValue={publicTransportComment}
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
                  placeholder="Write your review here"
                  onChange={handleDiningCommentChange}
                  defaultValue={diningComment}
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
                  placeholder="Write your review here"
                  onChange={handleEntertainmentCommentChange}
                  defaultValue={entertainmentComment}
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
                  placeholder="Write your review here"
                  onChange={handleNoiseLevelCommentChange}
                  defaultValue={noiseLevelComment}
                />
              </span>
            </div>
          </div>
          <div css={submitButton}>
            <button
              data-cy="review-save-changes-button"
              onClick={async (event) => {
                event.preventDefault();
                const response = await fetch(
                  `/api/reviews/${props.review[0].id}`,
                  {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
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
                  },
                );
                await response.json();
                router.push(`/profiles/${props.user.username}/?view=posts`);
              }}
            >
              Save Changes
            </button>
            <button
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
        destination: `https://${context.req.headers.host}/reviewId`,
        permanent: true,
      },
    };
  }

  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);
  const reviewId = context.params.reviewId;

  const review = await getUserPostById(reviewId);
  const districts = await getDistricts();

  if (session) {
    const user = await getUserById(session.userId);
    return {
      props: { user: user, districts: districts, review: review },
    };
  } else {
    return {
      props: {
        errors: 'no session',
        districts: districts,
        review: review,
      },
    };
  }
}
