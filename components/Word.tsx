import React from "react";

interface Props {
  title?: string;
  text?: string;
}

const Word: React.FunctionComponent<Props> = ({ title = "", text = "" }) => (
  <article>
    <h2>{title}</h2>
    {text.split("\n").map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </article>
);

export default Word;
