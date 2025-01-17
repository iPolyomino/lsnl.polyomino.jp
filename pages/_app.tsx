import React, { JSX } from "react";
import { AppProps } from "next/app";

import "../styles/reset.css";
import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
