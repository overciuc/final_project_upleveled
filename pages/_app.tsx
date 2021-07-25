import { css, Global } from '@emotion/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState<string>();
  const [firstName, setFirstName] = useState<string>();

  const refreshUserinfo = useCallback(async () => {
    const response = await fetch('/api/users');
    const json = await response.json();

    if ('errors' in json) {
      return;
    }
    setUsername(json.user?.username);
    setFirstName(json.user?.firstName);
  }, []);

  useEffect(() => {
    refreshUserinfo();
  }, [refreshUserinfo]);

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
              Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
            background-color: #0bc6d2;
          }
          @media (max-width: 900px) {
            .body {
              background-color: #fff;
            }
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      />

      <Head>
        <link rel="icon" href="/EyeFavicon2.png" type="image/gif" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-rangeslider/umd/rangeslider.min.css"
        />
      </Head>

      <Component
        refreshUserinfo={refreshUserinfo}
        usernameFromFetch={username}
        firstNameFromFetch={firstName}
        {...pageProps}
      />
    </>
  );
}
