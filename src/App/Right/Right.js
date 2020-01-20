import React from "react";
import "./index.scss";
import Header from "./Header";
import Body from "./Body";

const Right = () => {
  return (
    <section className={`right`}>
      <Header />
      <Body />
    </section>
  );
};

export default Right;
