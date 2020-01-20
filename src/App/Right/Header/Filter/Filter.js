import React from "react";
import "./index.scss";
import { IoIosSearch } from "react-icons/io";

const Filter = () => {
  return (
      <section className={`filter`}>
        <IoIosSearch size={24} />
        <span className={`filter__text`}>
          Search transactions, invoices or help
        </span>
        {false && (
          <input
            type="text"
            placeholder="Search transactions, invoices or help"
          />
        )}
      </section>
  );
};

export default Filter;
