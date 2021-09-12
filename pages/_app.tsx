import "@styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
