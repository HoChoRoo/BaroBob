import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CartProvider } from "./hooks/useCart";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>바로밥 - BaroBob</title>
        <meta name="description" content="theVenti coffee shop menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
