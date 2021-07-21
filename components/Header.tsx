import { css } from '@emotion/react';
import Link from 'next/link';

type Props = {
  firstName?: string;
  username?: string;
};

const headerStyles = css`
  display: flex;
  padding: 5px 15px;
  background-color: #0bc6d2;
  color: #fff;
  min-height: 80px;

  > div {
    padding: 20px 10px;
    float: right;
    margin-right: 0;
    margin-left: auto;
    margin-top: 20px;
  }

  > div > a {
    color: #fff;
    text-decoration: none;
    margin-left: 15px;
    font-size: 20px;

    padding: 10px 10px;
    :hover {
      color: greenyellow;
    }
  }
  > div > a + a {
    margin-left: 15px;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    padding: 10px 10px;
    :hover {
      text-decoration: #fff;
    }
  }

  > div > a + a + a + a + a {
    margin-left: 50px;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    padding: 10px 10px;
    font-weight: bold;
    :hover {
      text-decoration: #fff;
    }
  }
  > div > a + a + a + a + a + a {
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
`;

const logoStyles = css`
  height: 100px;
`;

export default function Header(props: Props) {
  return (
    <header css={headerStyles}>
      <span>
        <img src="/images/Logo2.gif" alt="Hood Review Logo" css={logoStyles} />
      </span>
      <div>
        <Link href="/">
          <a data-cy="navigate-to-home-page">Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        {props.username ? (
          <Link href={`/profiles/${props.username}/?view=user`}>
            <a>
              <span>
                Hello,
                <span>&nbsp;{props.firstName}</span>
              </span>
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}

        {props.username ? (
          <Link href="/logout">
            <a>Logout</a>
          </Link>
        ) : (
          <Link href="/signUp">
            <a data-cy="header-sign-up-link">Sign Up</a>
          </Link>
        )}
      </div>
    </header>
  );
}
