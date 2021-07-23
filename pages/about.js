import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const checkoutPage = css`
  margin-top: 20px;
  margin-bottom: 100px;
  max-width: 1300px;
  width: 100%;
  margin: auto;

  > div > a {
    width: 100%;
    font-size: 16px;
    color: black;
    text-decoration: none;
    padding-bottom: 20px;
    text-align: left;
    margin-bottom: 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  > div > span {
    color: red;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const aboutGridSection = css`
  margin-top: 50px;
  margin-bottom: 100px;
`;
const aboutGrid = css`
  max-width: 1700px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  grid-gap: 30px;
  padding: 10px 40px;
  text-align: center;
  list-style-type: none;
  background-color: #fff;

  > div > p {
    text-align: left;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.2;
    width: 100%;
    color: #484848;
    padding-left: 40px;
  }
`;

const imageStyle = css`
  max-width: 900px;
  max-height: 900px;
  text-align: center;
  border: none;
  margin: auto;
`;

const leftColumnHeader = css`
  width: 100%;
  > h1 {
    text-align: left;
    font-size: 40px;
    color: gray;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    margin: 30px auto;
    padding-left: 40px;
  }
`;

const newsletterBackground = css`
  width: 100%;
  height: 200px;
  z-index: -1;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #15ff004d;
  align-items: center;
  padding-top: 20px;

  ::before {
    background-image: url('/random.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    opacity: 0.2;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    content: '';
  }

  > section {
    max-width: 1300px;
    justify-content: center;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    grid-gap: 3rem;
    padding: 20px 40px;
    text-align: center;
    list-style-type: none;
    z-index: 20;
    position: relative;

    > div {
      font-weight: bold;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 30px;
      line-height: 1.2;
      color: #32355d;
    }
  }
`;

const ourTeamSection = css`
  margin-top: 100px;
  margin-bottom: 100px;

  > h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    color: gray;
    margin-bottom: 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 10px;
  }
  > h2 {
    background-color: red;
    background-size: 10% 10%;
    transform: rotate(2deg);
    text-align: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 10px;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
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

  > div {
    width: 400px;
    height: 400px;
  }

  > div > p {
    text-align: left;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.2;
    width: 85%;
    color: #484848;
  }
`;
const floatLeft = css`
  float: left;
  margin-left: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: gray;
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
`;

const line = css`
  width: 350px;
  border-top: 1px solid gray;
  margin: auto;
  opacity: 50%;
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
              <p>
                Hood Review is a service that allows users to leave reviews
                about the ir districts.
                <br />
                <br />
                One of the important aspects of moving to a new house or
                appartment is to know what kind of area it is. Are the schools
                nearby? Are there hospitals or clinics in a lcose vicinity? How
                long will it take me in the morning to get to work? These are
                just a few questions I was sking myself when looking for a new
                place to live. And it is even more important when you have kids.
                And that is the reason we decided to make this service, to help
                people get a bit of feedback from real people that live in the
                area that you might be intersted in moving to.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div css={newsletterBackground}>
        <section>
          <div>100% Customer Satisfaction</div>
          <div>Numerous local brands</div>
          <div>Wide range of products</div>
          <div>Fast delivery</div>
        </section>
      </div>
      <section css={ourTeamSection}>
        <h1>People Behind Sprinkle</h1>
        <div css={ourTeamGrid}>
          <div>
            <div>
              <img src="/images/olga.png" alt="about" css={ourTeamImageStyle} />
              <p>
                <span css={floatLeft}>Olga</span>
                <span css={floatRight}>The Creator</span>
              </p>
              <hr css={line} />
              <p css={teamMemebersText}>
                The visual designer behind Sprinkle Online Shop for Kids.
                <br />
                Spends her free time outdoors with family and friends. Always
                looking for new things to inspire future projects.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/images/george.jpg"
                alt="about"
                css={ourTeamImageStyle}
              />
              <p>
                <span css={floatLeft}>George</span>
                <span css={floatRight}>The Brains</span>
              </p>
              <hr css={line} />
              <p css={teamMemebersText}>
                The Brains behind Sprinkle Online Shop for Kids. <br />
                Spends his free time outdoors with family and friends. Always
                looking for new things to inspire future projects.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/images/nastja.png"
                alt="about"
                css={ourTeamImageStyle}
              />
              <p>
                <span css={floatLeft}>Anastasia</span>
                <span css={floatRight}>The Inspiration</span>
              </p>
              <hr css={line} />
              <p css={teamMemebersText}>
                The Ispiration for Sprinkle Online Shop for Kids. <br />
                Spends her free time outdoors with family and friends. Always
                being a fun little rascal and looking for ways to misbehave.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
