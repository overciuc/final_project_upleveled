import { css } from '@emotion/react';
import Head from 'next/head';
import Horizontal from '../components/RangeSlider';
import UserLayout from '../components/UserLayout';
import { getUserById, getValidSessionByToken } from '../util/database';

const formStyle = css`
  display: block;
  margin-left: 20px;
  width: 100%;
  max-width: 1500px;
  margin: auto;

  > div {
    margin-bottom: 50px;
    margin-top: 50px;
  }
`;

const firstDiv = css`
  display: flex;
  margin-left: 40px;
  width: 100%;
  max-width: 1500px;
  margin-top: 50px;
  height: 100%;
  max-height: 200px;

  > label {
    font-size: 20px;
    color: #0bc6d2;
  }

  > label > input {
    display: block;
    margin-right: 50px;
    width: 500px;
    height: 40px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid #0bc6d2;
    transition: 0.3s ease-in-out;
    ::placeholder {
      color: gray;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }

  > label + label > input {
    display: block;
    margin-right: 80px;
    width: 100px;
    height: 40px;
  }

  > label > select {
    display: block;
    width: 400px;
    height: 40px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid #0bc6d2;
    transition: 0.3s ease-in-out;
    color: gray;
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }
`;

const categoryReviewGrid = css`
  max-width: 1500px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-template-rows: repeat(8, 100px);
  align-items: center;
  grid-gap: 1rem;
  text-align: left;

  > ul {
    list-style-type: none;
    margin-top: 50px;
  }

  > ul > h2 {
    color: #0bc6d2;
    font-weight: normal;
  }

  > ul > li {
    box-shadow: 1px 0px 5px #a8a8a8;
    border: none;
    padding: 10px 15px;
    width: 500px;
    height: 100px;
    margin-left: 0;
    margin-bottom: 20px;
  }

  > ul > li > h4 {
    text-align: center;
    margin-top: 10px;
    color: gray;
    padding-bottom: 10px;
  }

  > ul + ul > li {
    border: none;
    box-shadow: none;
    margin-bottom: 20px;
    //padding: 10px 15px;
  }

  > ul + ul > li > input {
    border: 1px solid #0bc6d2;
    width: 500px;
    height: 100px;
    padding: 15px;
    ::placeholder {
      border: none;
      color: #ddd;
    }
  }
`;

export default function NewReviewPost(props) {
  console.log(props.user);
  return (
    <UserLayout username={props.user.username}>
      <Head>
        <title>
          {props.user.firstName} {props.user.lastName}
        </title>
      </Head>

      <section>
        <form css={formStyle}>
          <div css={firstDiv}>
            <label>
              Street name <span>*</span>:
              <input placeholder="Street Name" />
            </label>
            <label>
              House # <span>*</span>:
              <input placeholder="House #" />
            </label>
            <label>
              District <span>*</span>:
              <select>
                <option value="">Please select district</option>
                <option value="fist">1010 City Center</option>
              </select>
            </label>
          </div>

          <div css={categoryReviewGrid}>
            <ul>
              <h2>Rating:</h2>
              <li>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal />
              </li>
              <li>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal />
              </li>
              <li>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal />
              </li>
              <li>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal />
              </li>
              <li>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal />
              </li>
              <li>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal />
              </li>
              <li>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal />
              </li>
              <li>
                <h4>Parks and Recreational Areas</h4>
                <Horizontal />
              </li>
            </ul>
            <ul>
              <h2>Rating:</h2>
              <li>
                <input placeholder="Write your review here" />
              </li>
              <li>
                <input placeholder="Write your review here" />
              </li>
              <li>
                <input placeholder="Write your review here" />
              </li>
              <li>
                <input placeholder="Write your review here" />
              </li>
              <li>
                <input placeholder="Write your review here" />
              </li>
              <li>
                <input placeholder="Write your review here" />
              </li>
              <li>
                <input placeholder="Write your review here" />
              </li>
              <li>
                <input placeholder="Write your review here" />
              </li>
            </ul>
          </div>
        </form>
      </section>
    </UserLayout>
  );
}

export async function getServerSideProps(context) {
  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);

  if (session) {
    const user = await getUserById(session.userId);
    return {
      props: { user: user },
    };
  }
}
