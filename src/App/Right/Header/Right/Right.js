import React from "react";
import "./index.scss";
import { FaComments } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { GiWorld } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Right = () => {
  return (
    <section className={`header-right`}>
      <ul className={`header-right__toolbar`}>
        <GiWorld />
        <FaComments />
        <GoBell />
      </ul>

      <section className={`header-right__box`}>
        <section className={`header-right__select`}>
          <span>John Due</span> <IoIosArrowDown />
        </section>
        <img
          alt="avatar"
          className={`header-right__avatar`}
          src="https://www.thegreatcoursesdaily.com/wp-content/uploads/2017/02/Statue-of-Liberty-featured-image.jpg"
        />
      </section>
    </section>
  );
};

export default Right;
