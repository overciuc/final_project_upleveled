import { css } from '@emotion/react';

const popup = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  /*
  @media screen and (max-width: 900px) {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;

  }
  */
`;

const popupInner = css`
  position: relative;
  width: 100%;
  max-width: 900px;
  background-color: #fff;
  border-radius: 10px;
  padding-bottom: 40px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 900px) {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;
    height: 700px;
  }
  > div {
    justify-content: center;
  }
`;

const closeButton = css`
  width: 200px;
  height: 50px;
  padding: 10px 5px;
  justify-content: center;
  font-size: 24px;
  float: right;
  margin-right: 50px;
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
  background-color: #0bc6d2;
  border: none;
  @media screen and (max-width: 900px) {
    margin-left: 10px;
    margin-right: 30px;
    margin-top: -200px;
  }
  :hover {
    background-color: #0f41c1;
    color: #fff;
  }
`;

export default function Popup(props) {
  return props.trigger ? (
    <div css={popup}>
      <div css={popupInner}>
        <div>{props.children}</div>
        <div>
          <button css={closeButton} onClick={() => props.setTrigger(false)}>
            Close popup
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}
