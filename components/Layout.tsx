import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import Head from "next/head";

import Particles from "react-tsparticles";
import options from "../contents/particles.json";

const opts = options as ISourceOptions;

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Particles init={particlesInit} options={opts} />
      {children}
    </>
  );
};

export default Layout;
