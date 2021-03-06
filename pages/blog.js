import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import DaycarePopup from '../components/BlogPopups/Daycare';
import FunActivitiesPopup from '../components/BlogPopups/FunActivities';
import Lobau from '../components/BlogPopups/Lobau';
import LocalProducePopup from '../components/BlogPopups/LocalProduce';
import PlaygroundsPopup from '../components/BlogPopups/Playgrounds';
import WherePartyPopup from '../components/BlogPopups/WhereParty';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Popup from '../components/Popup';

const backgroundColor = css`
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2000;
  height: 100%;
  width: 100%;
  margin-top: -100px;
  margin-bottom: -50px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const checkoutPage = css`
  margin-top: 20px;
  margin-bottom: 100px;
  max-width: 1300px;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 900px) {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const ourTeamSection = css`
  margin-top: 100px;
  margin-bottom: 50px;
  padding-top: 50px;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-right: 10px;
    margin-left: 10px;
  }

  > h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    color: gray;
    margin-bottom: 50px;
    margin-top: 10px;
    @media screen and (max-width: 900px) {
      width: 100%;
      margin-right: 10px;
      margin-left: 10px;
      font-size: 35px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
    }
  }
`;

const blogPostGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(1, 400px);
  align-items: center;
  row-gap: 10px;
  column-gap: 50px;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-right: 10px;
    margin-left: 0px;
    margin-top: -60px;
  }

  > div {
    width: 400px;
    min-height: 300px;
    border-radius: 20px;
    padding: 30px 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    transition: transform 0.3s ease;
    @media screen and (max-width: 900px) {
      margin-bottom: -20px;
    }
    :hover {
      transform: translate(0, -10px);
    }
  }

  > div > p {
    text-align: left;
    font-size: 16px;
    line-height: 1.2;
    width: 85%;
    color: #484848;
  }
`;

const line = css`
  width: 350px;
  border-top: 1px solid gray;
  margin: auto;
  opacity: 50%;
`;

const blogButton = css`
  display: block;
  text-align: left;
  color: #20a314;
  font-size: 16px;
  width: 150px;
  margin-left: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const teamMemebersText = css`
  text-align: left;
  color: gray;
  font-size: 16px;
  width: 340px;
  margin-left: 15px;
`;

const floatLeft = css`
  float: left;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  margin-top: 5px;
`;

const floatRight = css`
  float: right;
  margin-right: 10px;
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const ourTeamImageStyle = css`
  width: 350px;
  height: 200px;
  text-align: center;
  margin: auto;
  margin-bottom: 5px;
`;

export default function Blog(props) {
  const [lobauButtonPopup, setLobauButtonPopup] = useState(false);
  const [funActivitiesButtonPopup, setFunActivitiesButtonPopup] =
    useState(false);
  const [playgroundsButtonPopup, setPlaygroundsButtonPopup] = useState(false);
  const [wherePartyButtonPopup, setWherePartyButtonPopup] = useState(false);
  const [daycareButtonPopup, setDaycareButtonPopup] = useState(false);
  const [produceButtonPopup, setProduceButtonPopup] = useState(false);

  return (
    <Layout
      firstName={props.firstNameFromFetch}
      username={props.usernameFromFetch}
    >
      <Head>
        <title>Articles</title>
      </Head>
      <div css={backgroundColor}>
        <section css={checkoutPage}>
          <section css={ourTeamSection}>
            <h1>Activities to do in the city of Vienna</h1>
            <div css={blogPostGrid}>
              <div>
                <div>
                  <img
                    src="/images/lobau.jpg"
                    alt="about"
                    css={ourTeamImageStyle}
                  />
                  <p>
                    <span css={floatLeft}>Lobau Park</span>
                    <span css={floatRight}>12.10.2020</span>
                  </p>
                  <hr css={line} />
                  <p css={teamMemebersText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>

                  <button
                    css={blogButton}
                    onClick={() => setLobauButtonPopup(true)}
                  >
                    Read More...
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/images/prater.png"
                    alt="about"
                    css={ourTeamImageStyle}
                  />
                  <p>
                    <span css={floatLeft}>Fun activities</span>
                    <span css={floatRight}>15.11.2020</span>
                  </p>
                  <hr css={line} />
                  <p css={teamMemebersText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button
                    css={blogButton}
                    onClick={() => setFunActivitiesButtonPopup(true)}
                  >
                    Read More...
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/images/playground_bg.png"
                    alt="about"
                    css={ourTeamImageStyle}
                  />
                  <p>
                    <span css={floatLeft}>Playgrounds</span>
                    <span css={floatRight}>05.09.2020</span>
                  </p>
                  <hr css={line} />
                  <p css={teamMemebersText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button
                    css={blogButton}
                    onClick={() => setPlaygroundsButtonPopup(true)}
                  >
                    Read More...
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/images/horses.png"
                    alt="about"
                    css={ourTeamImageStyle}
                  />
                  <p>
                    <span css={floatLeft}>Where the Party at</span>
                    <span css={floatRight}>06.05.2021</span>
                  </p>

                  <hr css={line} />
                  <p css={teamMemebersText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button
                    css={blogButton}
                    onClick={() => setWherePartyButtonPopup(true)}
                  >
                    Read More...
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/images/Daycare.jpg"
                    alt="about"
                    css={ourTeamImageStyle}
                  />
                  <p>
                    <span css={floatLeft}>All about daycare</span>
                    <span css={floatRight}>07.01.2021</span>
                  </p>
                  <hr css={line} />
                  <p css={teamMemebersText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button
                    css={blogButton}
                    onClick={() => setDaycareButtonPopup(true)}
                  >
                    Read More...
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/images/local_produce.jpg"
                    alt="about"
                    css={ourTeamImageStyle}
                  />
                  <p>
                    <span css={floatLeft}>Local produce</span>
                    <span css={floatRight}>03.03.2021</span>
                  </p>
                  <hr css={line} />
                  <p css={teamMemebersText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button
                    css={blogButton}
                    onClick={() => setProduceButtonPopup(true)}
                  >
                    Read More...
                  </button>
                </div>
              </div>
            </div>
          </section>

          <Popup trigger={lobauButtonPopup} setTrigger={setLobauButtonPopup}>
            <Lobau />
          </Popup>

          <Popup
            trigger={funActivitiesButtonPopup}
            setTrigger={setFunActivitiesButtonPopup}
          >
            <FunActivitiesPopup />
          </Popup>

          <Popup
            trigger={playgroundsButtonPopup}
            setTrigger={setPlaygroundsButtonPopup}
          >
            <PlaygroundsPopup />
          </Popup>

          <Popup
            trigger={wherePartyButtonPopup}
            setTrigger={setWherePartyButtonPopup}
          >
            <WherePartyPopup />
          </Popup>

          <Popup
            trigger={daycareButtonPopup}
            setTrigger={setDaycareButtonPopup}
          >
            <DaycarePopup />
          </Popup>

          <Popup
            trigger={produceButtonPopup}
            setTrigger={setProduceButtonPopup}
          >
            <LocalProducePopup />
          </Popup>
        </section>
      </div>
      <Footer />
    </Layout>
  );
}
