import { css } from '@emotion/react';
import Link from 'next/link';

const userPostsPageGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 25%;
  grid-gap: 30px;
  list-style-type: none;
  margin-bottom: 50px;
  margin-top: 50px;

  > div {
    width: 900px;
  }

  > div + div {
    width: 300px;
    margin-top: 50px;
    text-align: center;

    > a {
      width: 200px;
      height: 50px;
      padding-top: 10px;
      padding-bottom: 20px;
      text-align: center;
      background-color: #0bc6d2;
      border: none;
      border-radius: 10px;
      color: #fff;
      font-size: 20px;
      font-weight: normal;
      box-shadow: 0px 2px 2px gray;
      float: right;
      text-decoration: none;
      :hover {
        background-color: #fed648;
        color: #583dfd;
      }
    }
  }
`;

const postsGrid = css`
  max-width: 1000px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(3, 300px);
  align-items: center;
  grid-gap: 1rem;
  text-align: left;
  list-style-type: none;
  max-height: 600px;
  height: 600px;

  > li {
    box-shadow: 1px 0px 5px #a8a8a8;
    border: none;
    padding: 10px 15px;
    width: 350px;
    height: 240px;
    margin-left: 20px;
    transition: transform 0.3s ease;
    :hover {
      transform: translate(0, -10px);
    }

    > h2 {
      font-size: 16px;
      color: #0bc6d2;
      > span {
        color: gray;
        font-size: 20px;
      }
    }
    > p {
      font-size: 16px;
      color: gray;
      max-height: 40px;
    }

    > a {
      color: #e87676;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }

    > div {
      margin-top: 20px;
    }
    > div > button {
      border: none;
      background-color: transparent;
      float: left;
      margin-right: auto;
      margin-left: 0;
      text-align: left;
      padding-top: 30px;
      color: #0bc6d2;
      cursor: pointer;
    }
    > div > button + button {
      float: right;
      background-color: transparent;
      height: 30px;
      border: none;
      margin-right: 20px;
      font-size: 40px;
      font-weight: 500;
      color: red;
      margin-bottom: 10px;
      padding: 5px 15px;
      cursor: pointer;
    }
  }
`;

export default function UserPostsSection(props) {
  return (
    <div css={userPostsPageGrid}>
      <div>
        {props.postsSection}
        <ul css={postsGrid}>
          <li>
            <h2>
              Rating: <span>10</span>
            </h2>
            <p>
              kjsdhjkdfvyucihvjkshdfjkfjhkhg
              <br />
              kdjfsdhfjskdhf
            </p>
            <a>Read more ...</a>
            <div>
              <button>Edit review</button>
              <button>&#128465;</button>
            </div>
          </li>
          <li>
            <h2>
              Rating: <span>10</span>
            </h2>
            <p>kjsdhjkdfvyucihvjkshdfjk</p>
            <a>Read more ...</a>
            <div>
              <button>Edit review</button>
              <button>&#128465;</button>
            </div>
          </li>
          <li>
            <h2>
              Rating: <span>10</span>
            </h2>
            <p>kjsdhjkdfvyucihvjkshdfjk</p>
            <a>Read more ...</a>
            <div>
              <button>Edit review</button>
              <button>&#128465;</button>
            </div>
          </li>
          <li>
            <h2>
              Rating: <span>10</span>
            </h2>
            <p>kjsdhjkdfvyucihvjkshdfjk</p>
            <a>Read more ...</a>
            <div>
              <button>Edit review</button>
              <button>&#128465;</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/newReviewPostPage">
          <a>Create new review</a>
        </Link>
      </div>
    </div>
  );
}
