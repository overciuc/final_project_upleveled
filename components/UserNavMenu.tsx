import { css } from '@emotion/react';
import Link from 'next/link';

type Props = {
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
    margin-right: 10px;
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
    //font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
    :hover {
      background-color: #f309df;
      color: #fff;
    }
  }

  > div > span {
    font-size: 24px;
    font-weight: normal;
    margin-left: 30px;
    margin-right: 10px;
    color: #583dfd;
    > span {
      font-weight: bold;
    }
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
      //margin-left: 10px;
      text-decoration: none;
      :hover {
        background-color: #f309df;
        color: #fff;
      }
    }
  }
`;

const logoStyles = css`
  height: 100px;
`;

export default function UserNavMenu(props: Props) {
  return (
    <header css={headerStyles}>
      <span>
        <img src="/images/Logo2.gif" alt="Hood Review Logo" css={logoStyles} />
      </span>
      <div>
        <Link href="/">
          <a>Home</a>
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
        <span>
          Hello,
          <span>&nbsp;{props.username}</span>
        </span>
        <span>
          <Link href="/logout">
            <a>Logout</a>
          </Link>
        </span>
      </div>
    </header>
  );
}
