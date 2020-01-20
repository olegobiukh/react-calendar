import React from "react";
import "./index.scss";
import Navigation from "./Navigation";

const Left = () => {
  return (
    <section className={`left`}>
      <div className={`logo__wrapper`}>
        <span className={`logo`}>Impecable</span>
      </div>
     <Navigation /> 
    </section>
  );
};

export default Left;
