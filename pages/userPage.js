import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const backgroundColor = css`
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url('../images/squirrel.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #0bc6d2;
  z-index: -1;
  width: 100%;
  height: 900px;
`;

const containerBox = css`
  background-color: #fff;
  width: 1300px;
  height: 900px;
  left: 0;
  position: absolute;
  float: left;
  margin-right: auto;
  margin-left: 80px;
`;

const userTabStyles = css`
  max-height: 150px;
  height: 100px;
  width: 100%;
  max-width: 1300px;
  border-bottom: 1px solid #ddd;
`;

const avatarStyles = css`
  display: flex;
  margin-top: 40px;

  > div {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-color: rgba(129, 255, 160, 0.5);
    margin-left: 50px;
    background-image: url('./images/zebra.png');
    background-size: contain;
  }

  > h1 {
    display: inline-block;
    margin-top: 15px;
    margin-left: 20px;
    color: gray;
  }
`;

const userTabButton = css`
  float: right;
  margin-bottom: auto;
  margin-top: -30px;
  > button {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 10px 0px 0px 0px;
    background-color: #ddd;
    :active,
    :focus {
      background-color: gray;
      > a {
        color: #fff;
      }
    }
  }

  > button + button {
    border-radius: 0px 10px 0px 0px;
    margin-left: 1px;
    margin-right: 1px;
    background-color: #ddd;
    :active,
    :focus {
      background-color: gray;
      > a {
        color: #fff;
      }
    }
  }
  > button > a {
    text-decoration: none;
    color: #8b1c1c;
    font-size: 20px;
    padding: 20px 30px;
  }
`;

const userDetailsStyles = css`
  max-height: 600px;
  height: 600px;
  width: 100%;
  max-width: 1300px;
  border: 1px solid gray;
`;

const detailsTableStyles = css`
  max-width: 400px;
  width: 100%;
  padding: 20px 30px;
  margin-left: 20px;
`;

const deleteButtonSection = css`
  float: right;
  margin-right: 20px;
`;

export default function UserPage() {
  return (
    <Layout>
      <Head>
        <title>Your account</title>
      </Head>
      <div css={backgroundColor}>
        <div css={containerBox}>
          <div css={userTabStyles}>
            <div css={avatarStyles}>
              <div />
              <h1>Jack Frost</h1>
            </div>

            <div css={userTabButton}>
              <button>
                <a href="#1">Personal Data</a>
              </button>
              <button>
                <a href="#1">Your Posts</a>
              </button>
            </div>
          </div>

          <div css={userDetailsStyles}>
            <div css={detailsTableStyles}>login details</div>
            <div css={deleteButtonSection}>delete button</div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
