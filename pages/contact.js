import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const backgroundColor = css`
  background-repeat: no-repeat;
  background-size: cover;
  background: #0bc6d2;
  justify-content: center;
  width: 100%;
  min-height: auto;
  min-height: 897px;
  margin-top: -100px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -10;
  content: '';
`;

const contactPageGrid = css`
  max-width: 1500px;
  justify-content: space-between;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  text-align: center;
  list-style-type: none;
  margin-bottom: 50px;
  margin-top: 100px;
  padding-top: 100px;

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
  text-align: right;
  padding: 20px;
  margin-right: 10px;
  margin: auto;
`;

const formContainer = css`
  display: block;
  max-width: 650px;
  width: 100%;
  justify-content: center;
  text-align: left;

  > div {
    width: 100%;
    margin-top: 20px;
    display: block;
    margin-left: 0;
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
    margin-left: 0;
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
  > button {
    background-color: #fed648;
    color: #0f41c1;
    padding: 15px 20px;
    float: left;
    border-radius: 10px;
    border: none;
    font-size: 24px;
    cursor: pointer;
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

export default function ContactUs(props) {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    e.target.reset();
  }

  return (
    <Layout
      firstName={props.firstNameFromFetch}
      username={props.usernameFromFetch}
    >
      <Head>
        <title>Contact</title>
      </Head>

      <section css={backgroundColor}>
        <div css={contactPageGrid}>
          <div>
            <img
              src="/images/dog_image.jpeg"
              css={contactImage}
              alt="A dog with a book"
            />
          </div>
          <div>
            <h1 css={titleStyles}>Send Us a Message</h1>
            <p>
              Dont be shy, Just tell us about yourself and we’ll figure <br />
              out the best option for you or your company
            </p>

            <form css={formContainer} onSubmit={handleOnSubmit}>
              <div>
                <input id="name" placeholder="Name" type="text" name="name" />
              </div>
              <div>
                <input
                  placeholder="Email address"
                  id="email"
                  type="text"
                  name="email"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your message here"
                  id="message"
                  name="message"
                />
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
