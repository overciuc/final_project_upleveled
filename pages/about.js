import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const checkoutPage = css`
  margin-top: 20px;
  margin-bottom: 100px;
  //max-width: 1700px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
  }
`;

const aboutGridSection = css`
  margin-top: 50px;
  margin-bottom: 100px;
  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 0;
  }
`;
const aboutGrid = css`
  max-width: 1700px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 10px;
  text-align: center;
  list-style-type: none;
  background-color: #fff;
  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const imageStyle = css`
  max-width: 900px;
  max-height: 900px;
  text-align: center;
  border: none;
  margin: auto;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    float: left;
  }
`;

const leftColumnHeader = css`
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    float: left;
    margin-left: -70px;
  }
  > h1 {
    text-align: left;
    font-size: 40px;
    color: gray;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    margin: auto;
    margin-bottom: 10px;
    padding-left: 40px;
    @media screen and (max-width: 900px) {
      width: 100%;
      font-size: 28px;
    }
  }
  > hr {
    width: 100%;
    border-top: 3px solid #0bc6d2;
    opacity: 50%;
    margin-left: 40px;
    text-align: left;
    margin-bottom: 20px;
    @media screen and (max-width: 900px) {
      width: 100%;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  > p {
    text-align: left;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    line-height: 1.2;
    width: 100%;
    color: #484848;
    margin-left: 40px;
    @media scree and (max-width: 900px) {
      width: 100%;
      margin-left: -40px;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 16px;
    }
  }
`;

const newsletterBackground = css`
  width: 100%;
  height: 200px;
  z-index: -1;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: rgba(144, 224, 239, 0.5);
  align-items: center;
  padding-top: 20px;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
    height: 100px;
  }
`;

const ourTeamSection = css`
  margin-top: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    padding-right: 10px;
    padding-left: 10px;
  }

  > h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    color: gray;
    margin-bottom: 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 10px;
    @media screen and (max-width: 900px) {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 30px;
      margin-top: -50px;
      margin-bottom: 20px;
    }
  }
`;
const ourTeamGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(1, 400px);
  align-items: center;
  grid-gap: 1rem;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;
  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    padding-left: 10px;
  }

  > div {
    width: 400px;
    height: 400px;
    @media screen and (max-width: 900px) {
      width: 100%;
      padding-right: 10px;
      padding-left: 10px;
      margin-bottom: 50px;
    }
  }
  /*
  > div > p {
    text-align: left;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    line-height: 1.2;
    width: 85%;
    color: #484848;
  }
  */
`;

const floatLeft = css`
  float: left;
  margin-left: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  @media screen and (max-width: 900px) {
    margin-left: 20px;
  }
`;

const floatRight = css`
  float: right;
  margin-right: 30px;
  color: red;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
`;

const teamMemebersText = css`
  text-align: left;
  color: gray;
  font-size: 18px;
  width: 350px;
  margin-left: 30px;
  @media screen and (max-width: 900px) {
    width: 96%;
    padding-right: 10px;
    margin-left: 20px;
  }
`;

const line = css`
  width: 350px;
  border-top: 1px solid gray;
  margin: auto;
  opacity: 50%;
  @media screen and (max-width: 900px) {
    width: 96%;
    padding-right: 40px;
    margin-left: 10px;
  }
`;

const ourTeamImageStyle = css`
  width: 350px;
  height: 250px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  :hover {
    transform: translate(0, -10px);
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    max-height: 100vh;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default function About(props) {
  return (
    <Layout
      firstName={props.firstNameFromFetch}
      username={props.usernameFromFetch}
    >
      <Head>
        <title>About</title>
      </Head>
      <section css={checkoutPage}>
        <div css={aboutGridSection}>
          <div css={aboutGrid}>
            <div>
              <img
                src="/images/scenery.jpeg"
                alt="Man sittin gon a pier by the lake with a view on mountains"
                css={imageStyle}
              />
            </div>
            <div css={leftColumnHeader}>
              <h1>Who We Are, And What We Do</h1>
              <hr />
              <p>
                Hood Review is a service that allows users to leave reviews
                about their district in the city of Vienna.
                <br />
                <br />
                One of the important aspects of moving to a new house or
                appartment is to know what kind of area it is. Are the schools
                nearby? Are there hospitals or clinics in a close vicinity? How
                long will it take me in the morning to get to work? These are
                just a few questions I was sking myself when looking for a new
                place to live. And it is even more important when you have kids.
                <br />
                <br />
                That is the reason we decided to make this service, to help
                people get a bit of feedback from real people that live in the
                area that you might be intersted in moving to.
              </p>
            </div>
          </div>
        </div>

        <div css={newsletterBackground} />
        <section css={ourTeamSection}>
          <h1>People Behind Hood Review</h1>
          <div css={ourTeamGrid}>
            <div>
              <div>
                <img
                  src="/images/woman_magnifying_glass.jpeg"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Her</span>
                  <span css={floatRight}>The Creator</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Designer and developer behind Hood Review.
                  <br />
                  Spends her free time outdoors with family and friends. Always
                  looking for new things to inspire future projects.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/man_magnifying_glass.jpeg"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Him</span>
                  <span css={floatRight}>The Brains</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  The Brains behind Hood Review. <br />
                  Spends his free time outdoors with family and friends. Always
                  looking for new things to inspire future projects.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/kid_magnifying_glass.jpg"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Her</span>
                  <span css={floatRight}>The Inspiration</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  The Ispiration for Hood Review. <br />
                  Spends her free time outdoors with family and friends. Always
                  being a fun little rascal and looking for ways to misbehave.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </Layout>
  );
}
