import React from "react";
import Layout from "../components/Layout";
import Word from "../components/Word";

import Laboratory from "../contents/laboratory.json";

import Typewriter from "typewriter-effect";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Large-Scale Networking Laboratory">
      <section className="page">
        <h1 className="intro">
          <Typewriter
            onInit={(typewriter): void => {
              typewriter
                .typeString(
                  "<span>Network</span> <span>Architecture</span> <span>Laboratory</span>",
                )
                .start();
            }}
            options={{
              delay: 75,
            }}
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
