import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const backgroundColor = css`
  background-color: #0bc6d2;
  z-index: -1;
  width: 100%;
  height: 900px;
`;

const backgroundImage = css`
  background-image: url('../images/sand.jpg');
  width: 1600px;
  height: 800px;
  left: 0;
  position: absolute;
  float: left;
  margin-right: auto;
  margin-top: 50px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const signUpBoxBackground = css`
  width: 600px;
  height: 650px;
  background-color: #fff;
  margin-top: 150px;
  float: right;
  margin-right: 140px;
  box-shadow: 3px 5px 10px gray;
  position: absolute;
  right: 0;
`;

const signUpBox = css`
  width: 600px;
  height: 650px;
  background-color: #d6d6d6;
  margin-top: 120px;
  float: right;
  margin-right: 170px;
  box-shadow: 3px 5px 10px gray;
  position: absolute;
  right: 0;

  > h2 {
    font-weight: bold;
    font-size: 30px;
    color: #076b72;
    text-align: center;
    margin-top: 80px;
  }

  > div {
    width: 550px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
  }

  > div > div > input {
    width: 235px;
    margin-top: 30px;
    height: 50px;
    border-radius: 5px;
    border: none;
    transition: 0.3s ease-in-out;
    ::placeholder {
      padding-left: 10px;
      color: gray;
      opacity: 0.7;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
      padding-left: 10px;
    }
  }

  > div > div > input + input {
    width: 235px;
    margin-left: 30px;
  }

  > div > div + div > input {
    width: 500px;
  }

  > div > div > button {
    width: 200px;
    height: 60px;
    color: #0f41c1;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    background-color: #fed648;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 2px gray;
    > a {
      text-decoration: none;
    }
    :hover,
    a:hover {
      background-color: #0f41c1;
      color: #fff;
    }
  }
`;

export default function SignUp() {
  return (
    <Layout>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div css={backgroundColor}>
        <div css={signUpBoxBackground} />
        <div css={backgroundImage} />
        <div css={signUpBox}>
          <h2>Create your account</h2>
          <div>
            <div>
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
            <div>
              <input placeholder="Username" />
            </div>
            <div>
              <input placeholder="Password" />
            </div>
            <div>
              <input placeholder="Repeat Password" />
            </div>
            <div>
              <button>
                <a href="./userPage">Sign Up</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
