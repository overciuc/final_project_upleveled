import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { getValidSessionByToken } from '../util/database';
import { LoginResponse } from './api/login';

type Props = {
  refreshUsername: () => void;
  username?: string;
};

const backgroundColor = css`
  background-color: #0bc6d2;
  z-index: -1;
  width: 100%;
  height: 900px;
`;

const backgroundImage = css`
  background-image: url('../images/swing_rain.jpg');
  width: 1600px;
  height: 800px;
  right: 0;
  position: absolute;
  float: right;
  margin-left: auto;
  margin-top: 50px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const signUpBoxBackground = css`
  width: 600px;
  height: 650px;
  background-color: #fff;
  margin-top: 150px;
  float: left;
  margin-left: 140px;
  box-shadow: 3px 5px 10px gray;
  position: absolute;
  left: 0;
`;

const loginBox = css`
  width: 600px;
  height: 650px;
  background-color: #d6d6d6;
  margin-top: 120px;
  float: left;
  margin-left: 170px;
  box-shadow: 3px 5px 10px gray;
  position: absolute;
  left: 0;

  > div > p {
    margin-top: 40px;
    color: gray;
  }

  > div > p + p {
    margin-top: -10px;
  }

  > div > p > span > a {
    color: purple;
    font-size: 16px;
    cursor: pointer;
  }

  > h2 {
    font-weight: bold;
    font-size: 50px;
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
    width: 500px;
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

  > div > button {
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
  > div > p > span > a {
    text-decoration: none;
  }
`;

export default function Login(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <Layout username={props.username}>
      <Head>
        <title>Login</title>
      </Head>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          // Send the username and password to the API
          // for verification
          const response = await fetch(`/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });

          const json = (await response.json()) as LoginResponse;

          if ('errors' in json) {
            setError(json.errors[0].message);
            return;
          }

          props.refreshUsername();

          // Navigate to the user's page when
          // they have been successfully created
          router.push(`/profiles/${json.user.username}`);
        }}
      >
        <div css={backgroundColor}>
          <div css={signUpBoxBackground} />
          <div css={backgroundImage} />
          <div css={loginBox}>
            <h2>Login</h2>
            <div>
              <div>
                <input
                  placeholder="Username"
                  data-cy="users-management-create-username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.currentTarget.value);
                  }}
                />
              </div>

              <div>
                <input
                  placeholder="Password"
                  data-cy="users-management-create-password"
                  value={password}
                  type="password"
                  onChange={(event) => {
                    setPassword(event.currentTarget.value);
                  }}
                />
              </div>
            </div>
            <div>
              <button>Login</button>
            </div>
            <div style={{ color: 'red' }}>{error}</div>
            <div>
              <p>
                Forgot
                <span>
                  <a> username</a> or <a>password?</a>
                </span>
              </p>
              <p>
                Don't have an account? Register
                <span>
                  <Link href="./signUp">
                    <a> here.</a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/login`,
        permanent: true,
      },
    };
  }

  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);

  if (session) {
    // Redirect the user when they have a session
    // token by returning an object with the `redirect` prop
    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
    return {
      redirect: {
        destination: `/users/management/${session.userId}/read`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
