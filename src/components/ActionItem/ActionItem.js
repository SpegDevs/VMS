import React from "react";
import './ActionItem.module.css';

export const ActionItem = props => {
  return <i className="material-icons" id={props.name} onClick={() => {
    props.action(props.code)
  }}>{props.name}</i>;
};
