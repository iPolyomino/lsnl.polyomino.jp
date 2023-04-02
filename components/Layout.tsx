import * as React from "react";
import Head from "next/head";

import Particles from "react-particles-js";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
    </Head>
    <Particles
      params={{
        particles: {
          number: {
            value: 75,
          },
          size: {
            value: 7,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
    {children}
  </>
);

export default Layout;
