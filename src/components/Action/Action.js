import React from "react";
import { ActionItem } from "./../ActionItem/ActionItem";
import { actions } from "./Action.module.scss";
import axios from "axios";

const downloadFile = code => {
  download(code);
};

const download = code => {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(code)
  );
  element.setAttribute("download", "code.moe");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const sendToBack = async value => {
  const { data } = await axios.post("https://node-spegmoe.herokuapp.com/", {
    content: value
  });
  return data;
};

const names = [
  {
    icon: "play_arrow",
    action: sendToBack
  },
  {
    icon: "file_download",
    action: downloadFile
  },
  {
    icon: "delete",
    action: "delete"
  }
];

export const Action = () => {
  return (
    <div className={actions}>
      <ul>
        {names.map(item => {
          return (
            <ActionItem name={item.icon} action={item.action} key={item.icon} />
          );
        })}
      </ul>
    </div>
  );
};
