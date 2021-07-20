// import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

type Props = {
  refreshUserinfo: () => void;
  username: string;
  csrfToken: string;
  firstName?: string;
};

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
    padding-left: 20px;
    ::placeholder {
      color: gray;
      opacity: 0.7;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
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

    :hover {
      background-color: #0f41c1;
      color: #fff;
    }
  }
`;

export default function CreateSingleUser(props: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <Layout firstName={props.firstName} username={props.username}>
      <Head>
        <title>Sign Up</title>
      </Head>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          // create the user
          const response = await fetch(`/api/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              username: username,
              password: password,
              csrfToken: props.csrfToken,
            }),
          });
          const { user: createdUser } = await response.json();

          // login the newly created user
          await fetch(`/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });

          props.refreshUserinfo();

          // Navigate to the user's page when
          // they have been successfully created
          router.push(`/profiles/${createdUser.username}`);
        }}
      >
        <div css={backgroundColor}>
          <div css={signUpBoxBackground} />
          <div css={backgroundImage} />
          <div css={signUpBox}>
            <h2>Create your account</h2>
            <div>
              <div>
                <input
                  placeholder="First Name"
                  data-cy="signup-page-first-name"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.currentTarget.value);
                  }}
                />
                <input
                  placeholder="Last Name"
                  data-cy="signup-page-last-name"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.currentTarget.value);
                  }}
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  data-cy="signup-page-email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.currentTarget.value);
                  }}
                />
              </div>
              <div>
                <input
                  placeholder="Username"
                  data-cy="signup-page-username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.currentTarget.value);
                  }}
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  data-cy="signup-page-password"
                  value={password}
                  type="password"
                  onChange={(event) => {
                    setPassword(event.currentTarget.value);
                  }}
                />
              </div>

              <div>
                <button data-cy="signup-page-signup-button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </Layout>
  );
}
