import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import UserDataSection from '../../components/UserDataSection';
import UserLayout from '../../components/UserLayout';
import UserPostsSection from '../../components/UserPostsSection';
import { getUserPosts } from '../../util/database';
import { ApplicationError, Review, User } from '../../util/types';
import { SingleUserResponseType } from '../api/users-by-username/[username]';

type Props = {
  user?: User;
  firstName?: string;
  errors?: ApplicationError[];
  posts?: Review[];
};

const backgroundColor = css`
  background-repeat: no-repeat;
  background-size: cover;
  background: #0bc6d2;
  width: 100%;
  min-height: auto;
  min-height: 950px;
  margin-top: -100px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -10;
  content: '';
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
  margin-top: 100px;
  z-index: 10;
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

  > button {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 10px 0px 0px 0px;
    background-color: #ddd;
    color: #8b1c1c;
    font-size: 20px;
    :active,
    :focus {
      background-color: gray;
      color: #fff;
    }
  }

  > button + button {
    border-radius: 0px 10px 0px 0px;
    margin-left: 1px;
    margin-right: 1px;
    background-color: #ddd;
    color: #8b1c1c;
    font-size: 20px;
    :active,
    :focus {
      background-color: gray;
      color: #fff;
    }
  }
`;

export default function SingleUserProfile(props: Props) {
  const [showSection, setShowSection] = useState(false);

  // Show message if user not allowed
  const errors = props.errors;
  if (errors) {
    return (
      <UserLayout firstName={props.firstName}>
        <Head>
          <title>Error</title>
        </Head>
        Error: {errors[0].message}
      </UserLayout>
    );
  }

  // Show message if user does not exist
  if (!props.user) {
    return (
      <UserLayout firstName={props.firstName}>
        <Head>
          <title>User not found!</title>
        </Head>
        User not found
      </UserLayout>
    );
  }

  return (
    <UserLayout firstName={props.user.firstName}>
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
              <h1>
                {props.user.firstName} {props.user.lastName}
              </h1>
            </div>

            <div css={userTabButton}>
              <button onClick={() => setShowSection(false)}>
                Your Details
              </button>
              <button onClick={() => setShowSection(true)}>Your Posts</button>
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
    </UserLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
      ...json,
    },
  };
}
