import { css, Global } from '@emotion/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const [username, setUsername] = useState<string>();
  // Declare a function that we will use in any page or
  // component (via passing props) to refresh the
  // username (if it has gotten out of date)
  const refreshUsername =
    // useCallback: Prevent this function from getting
    // a different reference on every rerender
    //
    // We do this to prevent calls to the API on
    // every page navigation
    useCallback(async () => {
      // Call the API to retrieve the user information
      // by automatically passing along the sessionToken cookie
      const response = await fetch('/api/profile');
      const json = await response.json();

      // If there are errors, return early
      if ('errors' in json) {
        // TODO: Handle errors - show to the user
        return;
      }

      // Set the username state variable which we can use
      // in other components via passing props
      setUsername(json.user?.username);
    }, []);

  // Retrieve username information ONCE the first time
  // that a user loads the page
  useEffect(() => {
    refreshUsername();
  }, [refreshUsername]);

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
          }
        `}
      />

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Component
        refreshUsername={refreshUsername}
        username={username}
        {...pageProps}
      />
    </>
  );
}
