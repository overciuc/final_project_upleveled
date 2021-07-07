import { css } from '@emotion/react';
import Header from './Header';

const containerStyles = css`
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
`;

export default function Layout(props) {
  return (
    <>
      <Header username={props.username} firstName={props.firstName} />
      <div css={containerStyles}>{props.children}</div>
    </>
  );
}
