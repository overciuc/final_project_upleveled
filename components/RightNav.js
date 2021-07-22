import { css } from '@emotion/react';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/naming-convention
const navContainer = (open) => css`
  display: flex;
  @media screen and (max-width: 1125px) {
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0;
    @media screen and (max-width: 1125px) {
      flex-flow: column nowrap;
      background-color: #0bc6d2;
      z-index: 1200;
      position: fixed;
      top: 0px;
      right: 0;
      height: 100vh;
      width: 200px;
      margin-top: 0;
      padding-top: 5rem;
      transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;
    }
  }
  > ul > li {
    padding: 20px 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 15px;
    font-size: 20px;
    padding: 10px 10px;
    :hover {
      color: greenyellow;
    }
  }

  > ul > li + li + li + li + li {
    > a {
      color: #fff;
      text-decoration: none;
      font-size: 20px;
      padding: 10px 10px;
      font-weight: bold;
      :hover {
        text-decoration: #fff;
      }
    }
  }

  > ul > li + li + li + li + li + li {
    > a {
      width: 120px;
      height: 50px;
      padding: 10px 20px;
      background-color: #fed648;
      border-radius: 10px;
      border: none;
      text-align: center;
      cursor: pointer;
      color: #583dfd;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
      :hover {
        background-color: #f309df;
        color: #fff;
      }
    }
  }
`;
const RightNav = (props) => {
  return (
    <div css={navContainer(props.open)}>
      <ul>
        <li>
          <Link href="/">
            <a data-cy="navigate-to-home-page">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        {props.username ? (
          <li>
            <Link href={`/profiles/${props.username}/?view=user`}>
              <a>
                <span>
                  Hello,
                  <span>&nbsp;{props.firstName}</span>
                </span>
              </a>
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        )}
        {props.username ? (
          <li>
            <Link href="/logout">
              <a>Logout</a>
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/signUp">
              <a data-cy="header-sign-up-link">Sign Up</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RightNav;
