import { css } from '@emotion/react';
import Link from 'next/link';

const userPostsPageGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 25%;
  grid-column-gap: 30px;
  grid-row-gap: 0;
  list-style-type: none;
  margin-top: 50px;
  height: 650px;
  overflow: scroll;

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
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  text-align: left;
  list-style-type: none;

  > li {
    box-shadow: 1px 0px 5px #a8a8a8;
    border: none;
    padding: 10px 15px;
    padding-left: 30px;
    width: 350px;
    height: 220px;
    margin-left: 20px;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    :hover {
      transform: translate(0, -10px);
    }
    > h6 {
      color: #0bc6d2;
      font-size: 14px;
      margin-top: -10px;
      > span {
        font-size: 14px;
        color: gray;
      }
    }

    > div > a {
      text-decoration: none;
      color: #0bc6d2;
    }

    > h3 {
      color: gray;
      font-size: 20px;
      margin-top: -20px;
    }

    > h2 {
      font-size: 20px;
      color: #0bc6d2;
      > span {
        color: gray;
        font-size: 20px;
      }
    }
    > p {
      font-size: 16px;
      color: gray;
      margin-top: -10px;
    }

    > a {
      color: #e87676;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }

    > div {
      margin-top: -20px;
    }

    > div > button {
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
          {props.posts.map((review) => (
            <li key={`review-${review.id}`}>
              <h2>
                Rating: &nbsp; <span>{review.averageScore}</span>
              </h2>
              <h6>
                Date published:&nbsp;<span>{review.dateString}</span>
              </h6>
              <h3>
                {review.district}&nbsp;
                {review.districtName}{' '}
              </h3>
              <p>{review.streetName}</p>

              <div>
                <a href={`/reviews/${review.id}`}>Edit review</a>
                <button
                  onClick={async (event) => {
                    event.preventDefault();

                    const response = await fetch(`/api/reviews/${review.id}`, {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        csrfToken: props.csrfToken,
                      }),
                    });
                    await response.json();
                  }}
                >
                  &#128465;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href="/newReviewPostPage">
          <a>Write new review</a>
        </Link>
      </div>
    </div>
  );
}
