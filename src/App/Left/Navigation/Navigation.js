import React from "react";
import "./index.scss";
import uid from "uid";

const items = [
  "home",
  "dashboard",
  "inbox",
  "products",
  "customers",
  "chat room",
  "calendar",
  "help center",
  "settings"
];

const Navigation = () => {
  return (
    <ul className={`navigation`}>
      {items.map(item => (
        <li key={uid()} className={`navigation__item`}>{item}</li>
      ))}
    </ul>
  );
};

export default Navigation;
