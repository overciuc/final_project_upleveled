import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { ModalProvider } from 'react-simple-modal-provider';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import modals from '../components/Modal';

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
    margin-bottom: 20px;
  }
  > div > span {
    color: red;
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
    margin-top: 10px;
  }
  > h2 {
    background-color: red;
    background-size: 10% 10%;
    transform: rotate(-2deg);
    text-align: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 10px;
    width: 10%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
`;

const blogPostGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(1, 400px);
  align-items: center;
  row-gap: 30px;
  column-gap: 50px;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;

  > div {
    width: 400px;
    min-height: 300px;
    border-radius: 20px;
    padding: 30px 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    transition: transform 0.3s ease;
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

const blogLink = css`
  display: block;
  text-align: left;
  color: #20a314;
  font-size: 16px;
  width: 350px;
  margin-left: 10px;
  cursor: pointer;
`;

const teamMemebersText = css`
  text-align: left;
  color: gray;
  font-size: 16px;
  width: 340px;
  margin-left: 10px;
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
  return (
    <Layout
      firstName={props.firstNameFromFetch}
      username={props.usernameFromFetch}
    >
      <Head>
        <title>Contact</title>
      </Head>

      <section css={checkoutPage}>
        <section css={ourTeamSection}>
          <h1>Activities to do in the city of Vienna</h1>
          <div css={blogPostGrid}>
            <div>
              <div>
                <img
                  src="/images/boat.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Lobau Park</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <ModalProvider value={modals}>
                  <button css={blogLink}>Read More...</button>
                </ModalProvider>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/bridge.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Fun activities</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/palace.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Playgrounds</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
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
                  <span css={floatRight}>12.10.2020</span>
                </p>

                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
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
                  <span css={floatLeft}>All about daycare</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
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
                  <span css={floatLeft}>Local produce</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </Layout>
  );
}
/*
export async function getServerSideProps(context) {
  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);

  if (session) {
    const user = await getUserById(session.userId);
    return {
      props: { user: user },
    };
  } else {
    return { props: {} };
  }
}
*/
