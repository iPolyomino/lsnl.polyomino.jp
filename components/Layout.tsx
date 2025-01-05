import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import Head from "next/head";

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
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {init && <Particles id="tsparticles" options={opts} />}
      {children}
    </>
  );
};

export default Layout;
