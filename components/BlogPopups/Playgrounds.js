import { css } from '@emotion/react';

const blogPostStyle = css`
  width: 900px;
  min-height: 800px;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const popupTitleStyle = css`
  display: flex;
  margin-left: 40px;
  margin-right: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: -10px;
    margin-right: 10px;
  }
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
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: -10px;
    max-height: 250px;
  }
`;

const line = css`
  width: 800px;
  border-top: 1px solid gray;
  margin: auto;
  opacity: 50%;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: -10px;
    margin-right: 10px;
  }
`;

const popupText = css`
  margin-left: 30px;
  width: 800px;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: -10px;
    margin-right: 10px;
    padding-right: 30px;
    padding-left: 10px;
    margin-bottom: -50px;
  }
  > p {
    font-size: 18px;
    color: gray;
    margin-left: 25px;
    @media screen and (max-width: 900px) {
      width: 100%;
      font-size: 16px;
      padding-right: 30px;
    }
  }
`;

export default function PlaygroundsPopup() {
  return (
    <div css={blogPostStyle}>
      <div>
        <img src="/images/playground_bg.png" alt="about" css={popupImage} />
        <div css={popupTitleStyle}>
          <p>
            <span css={floatLeft}>Playgrounds</span>
            <span css={floatRight}>05.09.2020</span>
          </p>
        </div>
        <hr css={line} />
        <div css={popupText}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
