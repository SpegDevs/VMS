import React from "react";
import "./ActionItem.module.css";

export const ActionItem = ({ name, action }) => {
  return (
    <i
      className="material-icons"
      id={name}
      onClick={() => {
        action();
      }}
    >
      {name}
    </i>
  );
};
