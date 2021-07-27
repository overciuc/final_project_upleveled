import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';
import Burger from './Burger';
import RightNav from './RightNav';

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
  @media screen and (max-width: 1024px) {
    padding: 10px 20px;
    width: 100%;
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    width: 100%;
    flex-direction: row;
  }
  @media screen and (max-width: 450px) {
    padding: 10px 20px;
    width: 100%;
    flex-direction: row;
  }
  /*
  > li {
    padding: 20px 10px;
    float: right;
    margin-right: 0;
    margin-left: auto;
    margin-top: 20px;
  }

  > li > a {
    color: #fff;
    text-decoration: none;
    margin-left: 15px;
    font-size: 20px;

    padding: 10px 10px;
    :hover {
      color: greenyellow;
    }
  }
  > li > a + a {
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
  */
`;

const floatRightNavMenu = css`
  padding: 5px 10px;
  float: right;
  margin-right: 0;
  margin-left: auto;
  //margin-top: 20px;
  /* @media screen and (max-width: 1024px) {
  width: 20%;
  }*/
`;

const logoStyles = css`
  height: 100px;
  @media screen and (max-width: 1024px) {
    width: 50%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    width: 70%;
    height: auto;
  }
`;

export default function Header(props: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header css={headerStyles}>
      <span>
        <Link href="/">
          <a>
            <img
              src="/images/Logo2.gif"
              alt="Hood Review Logo"
              css={logoStyles}
            />
          </a>
        </Link>
      </span>
      <div css={floatRightNavMenu}>
        {/*
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
        */}
        <RightNav
          username={props.username}
          firstName={props.firstName}
          open={open}
        />
        <Burger open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}
