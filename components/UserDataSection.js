import { css } from '@emotion/react';

// import { GetServerSidePropsContext } from 'next';
// import { ApplicationError, User } from '../../util/types';
// import { SingleUserResponseType } from '../api/users-by-username/[username]';

const userSectionGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 25%;
  grid-gap: 30px;
  list-style-type: none;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const userDetailsStyles = css`
  max-height: 600px;
  height: 600px;
  width: 100%;
  max-width: 900px;
`;

const detailsTableStyles = css`
  max-width: 800px;
  width: 100%;
  padding: 20px 30px;
  margin-left: 20px;
  > h2 {
    font-size: 24px;
    color: gray;
  }

  > div {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #0bc6d2;
  }

  > div > span {
    //font-weight: normal;
    //font-size: 24px;
    margin-left: 20px;
    //color: gray;
  }

  > div > span > input {
    border: none;
    margin-left: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 500px;
    height: 40px;
    transition: 0.3s ease-in-out;
    ::placeholder {
      color: gray;
      font-size: 24px;
      font-weight: normal;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }

  > div + div + div > span > input {
    border: none;
    margin-left: 50px;
    padding-left: 10px;
    width: 500px;
    height: 40px;
    transition: 0.3s ease-in-out;
    ::placeholder {
      color: gray;
      font-size: 24px;
      font-weight: normal;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }
`;

const buttonSection = css`
  width: 300px;
  margin-top: 50px;
  float: right;
  text-align: center;
`;

const deleteButton = css`
  float: right;
  width: 200px;
  height: 50px;
  padding: 15px 15px;
  text-align: center;
  background-color: rgba(201, 9, 9, 0.5);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  box-shadow: 0px 2px 2px gray;
  :hover {
    background-color: red;
    color: #fff;
  }
`;

const editButton = css`
  float: right;
  width: 200px;
  height: 50px;
  padding: 15px 15px;
  text-align: center;
  background-color: #0bc6d2;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  box-shadow: 0px 2px 2px gray;
  :hover {
    background-color: #fed648;
    color: #583dfd;
  }
`;

export default function UserDataSection(props) {
  return (
    <div css={userSectionGrid}>
      {props.dataSection}
      <div css={userDetailsStyles}>
        <div css={detailsTableStyles}>
          <h2>Personal Details</h2>
          <div>
            First Name:
            <span>
              <input placeholder={props.user.firstName} />
            </span>
          </div>
          <div>
            Last Name:{' '}
            <span>
              <input placeholder={props.user.lastName} />
            </span>
          </div>
          <div>
            E-mail:
            <span>
              <input placeholder={props.user.email} />
            </span>
          </div>
          <br />
          <h2>Security details</h2>
          <div>
            Username:{' '}
            <span>
              <input placeholder={props.user.username} />
            </span>
          </div>
          <div>
            Password:{' '}
            <span>
              <input placeholder={props.user.password} />
            </span>
          </div>
        </div>
      </div>
      <div css={buttonSection}>
        <button css={editButton}>Edit details</button>
        <button css={deleteButton}>Delete Account</button>
      </div>
    </div>
  );
}
/*
export async function getServerSideProps(context) {
  // API design here is not so great, maybe don't copy
  const response =
    // Since we're fetching on the server side,
    // the browser is not a part of this `fetch`
    // and it is therefore not sending the cookies along
    //
    // This is using the node-fetch library
    // internally
    await fetch(
      `${process.env.API_BASE_URL}/users-by-username/${context.query.username}`,
      {
        method: 'GET',
        headers: {
          // This forwards the cookie to the API route
          cookie: context.req.headers.cookie || '',
        },
      },
    );
  */
/*
  const json = (await response.json()) as SingleUserResponseType;

  console.log('API decoded JSON from response', json);

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

  return {
    props: {
      ...json,
    },
  };
  */
