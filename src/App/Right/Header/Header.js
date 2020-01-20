import React from "react";
import "./index.scss";
import Filter from "./Filter";
import Right from "./Right";

const Header = () => {
  return (
    <header className={`header`}>
      <Filter />
      <Right />
    </header>
  );
};

export default Header;
