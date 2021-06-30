import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const contactUsPage = css`
  margin-top: 20px;
  margin-bottom: 100px;
  max-width: 1300px;
  width: 100%;
  padding: 20px 30px;
  margin: auto;
`;

const contactPageGrid = css`
  max-width: 1500px;
  justify-content: space-between;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-gap: 1rem;
  text-align: center;
  list-style-type: none;
  margin-bottom: 50px;
  margin-top: 50px;

  > div > button {
    background-color: #fed648;
    color: #0f41c1;
    padding: 15px 20px;
    float: left;
    border-radius: 10px;
    border: none;
    font-size: 24px;
    cursor: pointer;
    margin-left: 10px;
    font-weight: bold;
    :hover {
      background-color: #f309df;
      color: #fff;
    }
    :active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }

  > div > p {
    text-align: left;
    font-family: 'Baloo Tammudu 2', cursive;
    line-height: 1.5;
    color: gray;
  }
`;

const contactImage = css`
  max-width: 600px;
  max-height: 650px;
  justify-content: center;
  padding: 20px;
  padding-right: 20px;
  margin-right: 40px;
  margin: auto;
`;

const formContainer = css`
  display: block;
  max-width: 650px;
  width: 100%;
  justify-content: center;
  margin: auto;
  text-align: left;

  > div {
    width: 100%;
    margin: auto;
    margin-top: 20px;

    display: block;
  }

  > div > input {
    border-radius: 10px;
    height: 50px;
    width: 500px;
    border: 1px solid #00bbf9;
    margin-bottom: 10px;
    display: block;
    margin-top: 25px;
    outline: none;
    font-family: inherit;
    padding-left: 20px;
    transition: 0.3s ease-in-out;
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
    ::placeholder {
      color: gray;
      opacity: 0.5;
      font-size: 16px;
    }
  }

  > div > textarea {
    width: 500px;
    border-radius: 10px;
    border: 1px solid #00bbf9;
    align-items: center;
    height: 120px;
    display: block;
    margin: 25px 0;
    outline: none;
    font-family: inherit;
    padding-left: 20px;
    padding-top: 10px;
    transition: 0.3s ease-in-out;
    ::placeholder {
      color: gray;
      opacity: 0.5;
      font-size: 16px;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }
`;

const titleStyles = css`
  display: flex;
  justify-content: left;
  font-size: 40px;
  font-weight: bold;
  color: gray;
  margin-bottom: 10px;
  font-family: 'Gorditas', cursive;
  margin-top: 10px;
`;

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>

      <section css={contactUsPage}>
        <div css={contactPageGrid}>
          <div>
            <img
              src="/images/cuteCat.jpg"
              css={contactImage}
              alt="A cat with balloons"
            />
          </div>
          <div>
            <h1 css={titleStyles}>Send Us a Message</h1>
            <p>
              Dont be shy, Just tell us about yourself and we’ll figure <br />
              out the best option for you or your company
            </p>

            <form css={formContainer}>
              <div>
                <input
                  id="firstName"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                />

                <input placeholder="Last Name" id="lastName" name="lastName" />
              </div>

              <div>
                <textarea
                  placeholder="Your message here"
                  id="messageArea"
                  name="messageArea"
                />
              </div>
            </form>
            <button>Send Message</button>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
