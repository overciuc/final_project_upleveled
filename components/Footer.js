import { css } from '@emotion/react';

const footerStyles = css`
  background-color: #0bc6d2;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  z-index: 10;
  height: 65px;
  width: 100%;
  border-top: 1px solid #069099;
  justify-content: center;
  position: absolute;
`;

const copyrightStyles = css`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

export default function Footer() {
  return (
    <section css={footerStyles}>
      <p css={copyrightStyles}>&#169; HoodReview</p>
    </section>
  );
}
