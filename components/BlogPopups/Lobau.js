import { css } from '@emotion/react';

const blogPostStyle = css`
  width: 900px;
  min-height: 800px;
  justify-content: center;
  //margin: auto;
  margin-bottom: 20px;
`;

const popupTitleStyle = css`
  display: flex;
  margin-left: 40px;
  margin-right: 0px;
  margin-bottom: 0px;
  > p {
    text-align: left;
    font-size: 16px;
    line-height: 1.2;
    width: 85%;
    color: #484848;
  }
`;

const floatLeft = css`
  float: left;
  margin-left: 30px;
  font-size: 24px;
  font-weight: bold;
  color: gray;
  margin-top: 5px;
`;

const floatRight = css`
  float: right;
  color: red;
  font-size: 14px;
  margin-top: 15px;
  margin-right: -40px;
`;

const popupImage = css`
  width: 100%;
  max-height: 500px;
  border-radius: 10px 10px 0 0;
`;

const line = css`
  width: 800px;
  border-top: 1px solid gray;
  margin: auto;
  opacity: 50%;
`;

const popupText = css`
  margin-left: 30px;
  width: 800px;
  > p {
    font-size: 18px;
    color: gray;
    margin-left: 25px;
  }
`;

export default function LobauPopup() {
  return (
    <div css={blogPostStyle}>
      <div>
        <img src="/images/lobau.jpg" alt="about" css={popupImage} />
        <div css={popupTitleStyle}>
          <p>
            <span css={floatLeft}>Lobau Park</span>

            <span css={floatRight}>12.10.2020</span>
          </p>
        </div>
      </div>
      <hr css={line} />
      <div css={popupText}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
