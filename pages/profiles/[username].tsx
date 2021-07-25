import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import UserDataSection from '../../components/UserDataSection';
import UserPostsSection from '../../components/UserPostsSection';
import { getUserPosts } from '../../util/database';
import { ApplicationError, Review, User } from '../../util/types';
import { SingleUserResponseType } from '../api/users-by-username/[username]';

type Props = {
  user?: User;
  firstName?: string;
  errors?: ApplicationError[];
  posts?: Review[];
  view?: 'posts' | 'user';
};

const backgroundColor = css`
  background-repeat: no-repeat;
  background-size: cover;
  background: #0bc6d2;
  width: 100%;
  min-height: 997px;
  margin-top: -100px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -10;
  content: '';
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    background-size: 100%;
  }
`;

const containerBox = css`
  background-color: #fff;
  width: 1300px;
  min-height: auto;
  left: 0;
  position: absolute;
  float: left;
  margin-right: auto;
  margin-left: 80px;
  margin-bottom: 100px;
  margin-top: 150px;
  height: 800px;
  z-index: 10;
  @media screen and (max-width: 900px) {
    width: 88%;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 30px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    margin-top: 110px;
    padding-bottom: 50px;
    height: auto;
  }
`;

const userTabStyles = css`
  max-height: 150px;
  height: 100px;
  width: 100%;
  max-width: 1300px;
  border-bottom: 1px solid #ddd;
  @media screen and (max-width: 900px) {
    width: 100%;
    border-bottom: none;
    //margin-bottom: 50px;
    z-index: 10;
  }
`;

const avatarStyles = css`
  display: flex;
  margin-top: 40px;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 50px;
  }

  > div {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-color: rgba(129, 255, 160, 0.5);
    margin-left: 20px;
    background-image: url('/images/zebra.png');
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
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-right: 20px;
    padding-left: 30px;
    border-bottom: 1px solid #ddd;
    margin-bottom: auto;
  }

  > button {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 10px 0px 0px 0px;
    font-size: 20px;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      width: 49% !important;
      font-size: 16px;
    }
  }

  > button + button {
    border-radius: 0px 10px 0px 0px;
    margin-left: 1px;
    margin-right: 1px;
    font-size: 20px;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
`;

const activeButton = css`
  background-color: gray;
  color: #fff;
`;

const inactiveButton = css`
  background-color: #ddd;
  color: #8b1c1c;
`;

export default function SingleUserProfile(props: Props) {
  const [showSection, setShowSection] = useState(props.view === 'posts');

  // Show message if user not allowed
  const errors = props.errors;
  if (errors) {
    return (
      <Layout>
        <Head>
          <title>Error</title>
        </Head>
        Error: {errors[0].message}
      </Layout>
    );
  }

  // Show message if user does not exist
  if (!props.user) {
    return (
      <Layout>
        <Head>
          <title>User not found!</title>
        </Head>
        User not found
      </Layout>
    );
  }

  return (
    <Layout firstName={props.user.firstName} username={props.user.username}>
      <Head>
        <title>
          {props.user.firstName} {props.user.lastName}
        </title>
      </Head>

      <div css={backgroundColor}>
        <div css={containerBox}>
          <div css={userTabStyles}>
            <div css={avatarStyles}>
              <div />
              <h1 data-cy="user-page-first-name">
                {props.user.firstName} {props.user.lastName}
              </h1>
            </div>

            <div css={userTabButton}>
              <button
                data-cy="navigate-to-user-page"
                onClick={() => setShowSection(false)}
                css={!showSection ? activeButton : inactiveButton}
              >
                Your Details
              </button>
              <button
                data-cy="user-posts-button"
                onClick={() => setShowSection(true)}
                css={showSection ? activeButton : inactiveButton}
              >
                Your Posts
              </button>
            </div>
          </div>

          <div>
            <div>
              {showSection ? (
                <UserPostsSection
                  postsSection={showSection}
                  user={props.user}
                  posts={props.posts}
                />
              ) : (
                <UserDataSection dataSection={showSection} user={props.user} />
              )}
            </div>
          </div>
        </div>
      </div>
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
        destination: `https://${context.req.headers.host}/username`,
        permanent: true,
      },
    };
  }

  const response = await fetch(
    `${process.env.API_BASE_URL}/users-by-username/${context.query.username}`,
    {
      method: 'GET',
      headers: {
        // This forwards the cookie to the API route
        cookie: context.req.headers.cookie || '',
      },
    },
  );

  const json = (await response.json()) as SingleUserResponseType;

  if ('errors' in json) {
    // Better would be to return the status code
    // in the error itself
    context.res.statusCode = 403;
  } else if (!json.user) {
    // Return a proper status code for a response
    // with a null user (which indicates it has
    // not been found in the database)
    context.res.statusCode = 404;
  }

  let posts = [];
  if ('user' in json && json.user != null) {
    posts = await getUserPosts(json.user.id);
  }

  return {
    props: {
      posts: posts,
      view: context.query.view || 'user',
      ...json,
    },
  };
}
