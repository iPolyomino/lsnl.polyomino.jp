import React from "react";
import Layout from "../components/Layout";
import Word from "../components/Word";

import Laboratory from "../contents/laboratory.json";

import Typed from "react-typed";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Large-Scale Networking Laboratory">
      <section className="page">
        <h1 className="intro">
          <Typed
            strings={[
              "<span>Network</span> <span>Architecture</span> <span>Laboratory</span>",
            ]}
            typeSpeed={50}
          />
        </h1>
      </section>
      <section className="contents">
        <main>
          {Laboratory["words"].map((word, index) => (
            <Word key={index} title={word.title} text={word.text} />
          ))}
        </main>
      </section>
    </Layout>
  );
};

export default IndexPage;
