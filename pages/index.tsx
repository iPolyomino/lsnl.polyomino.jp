import * as React from "react";
import Layout from "../components/Layout";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Large-Scale Networking Laboratory">
      <section className="intro">
        <h1>Large-Scale Networking Laboratory</h1>
      </section>
      <h2>大規模ネットワーク研究室</h2>
      <h3>メンバー</h3>
      <h3>研究内容</h3>
      <h3>アクセス</h3>
      <h3>連絡先</h3>
    </Layout>
  );
};

export default IndexPage;
