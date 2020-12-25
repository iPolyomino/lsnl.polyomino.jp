import * as React from "react";
import Layout from "../components/Layout";

import Typed from "react-typed";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Large-Scale Networking Laboratory">
      <section className="page">
        <h1 className="intro">
        <Typed
          strings={["<span>Network</span> <span>Architecture</span> <span>Laboratory</span>"]}
          typeSpeed={50}
        />
        </h1>
      </section>
      <section className="contents">
        <main>
          <article>
            <h2>News</h2>
            hello world
          </article>
          <article>
            <h2>Members</h2>
            hello world
          </article>
          <article>
            <h2>Research</h2>
            hello world
          </article>
          <article>
            <h2>Publication</h2>
            hello world
          </article>
          <article>
            <h2>Access</h2>
            hello world
          </article>
          <article>
            <h2>Contact</h2>
            hello world
          </article>
        </main>
      </section>
    </Layout>
  );
};

export default IndexPage;
