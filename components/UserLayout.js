import { css } from '@emotion/react';
import UserNavMenu from './UserNavMenu';

const containerStyles = css`
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
`;

export default function UserLayout(props) {
  return (
    <>
      <UserNavMenu firstName={props.firstName} username={props.username} />
      <div css={containerStyles}>{props.children}</div>
    </>
  );
}
