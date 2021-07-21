import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';

const userPostsPageGrid = css`
  max-width: 1300px;
  justify-content: center;
  display: grid;
  grid-template-columns: 70% 25%;
  grid-column-gap: 30px;
  list-style-type: none;
  margin-top: 50px;
  height: 600px;
  overflow-x: hidden;
  overflow-y: scroll;

  > div {
    width: 900px;
    padding: 10px 20px;
  }

  > div + div {
    width: 300px;
    margin-top: 20px;
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
  grid-template-rows: repeat(3, 250px);
  align-items: center;
  gap: 20px 20px;
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
    margin-top: 20px;
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

    > div {
      margin-top: 30px;
      align-items: center;

      > div > a {
        text-decoration: none;
        color: #0bc6d2;
        cursor: pointer;
        padding-top: 10px;
        float: left;
        > i {
          font-size: 30px;
          color: #0bc6d2;
          :hover {
            color: blueviolet;
          }
        }
      }
      > div > button {
        float: right;
        background-color: transparent;
        border: none;
        margin-right: 20px;
        font-size: 40px;
        font-weight: 500;
        color: red;
        cursor: pointer;
        padding-bottom: 30px;
        :hover {
          color: rebeccapurple;
        }
      }
    }
  }
`;

export default function UserPostsSection(props) {
  const [reviews, setReviews] = useState(props.posts);

  return (
    <div css={userPostsPageGrid}>
      <div>
        {props.postsSection}
        <ul css={postsGrid}>
          {reviews.map((review) => (
            <li key={`review-${review.id}`}>
              <h2>
                Rating: &nbsp;
                <span data-cy="user-review-rating">{review.averageScore}</span>
              </h2>
              <h6>
                Date published:&nbsp;<span>{review.dateString}</span>
              </h6>
              <h3 data-cy="user-review-district">
                {review.district}&nbsp;
                {review.districtName}
              </h3>
              <div>
                <div>
                  <a href={`/reviews/${review.id}`}>
                    <i
                      class="bi bi-pencil-square"
                      data-cy="edite-review-button"
                    />
                  </a>
                </div>
                <div>
                  <button
                    data-cy="delete-review-button-pressed"
                    onClick={async (event) => {
                      event.preventDefault();

                      if (
                        !window.confirm(
                          `Really delete review ${review.district}?`,
                        )
                      ) {
                        return;
                      }

                      const response = await fetch(
                        `/api/reviews/${review.id}`,
                        {
                          method: 'DELETE',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            csrfToken: props.csrfToken,
                          }),
                        },
                      );
                      const { review: deletedReview } = await response.json();

                      setReviews(
                        reviews.filter(({ id }) => id !== deletedReview.id),
                      );
                    }}
                  >
                    &#128465;
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href="/newReviewPostPage">
          <a data-cy="write-new-review-button">Write new review</a>
        </Link>
      </div>
    </div>
  );
}
