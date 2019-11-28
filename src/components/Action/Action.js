import React, { useState } from "react";
import { ActionItem } from "./../ActionItem/ActionItem";
import { actions } from "./Action.module.scss";
import { useMutate } from "restful-react";
import ReducerActionType from "../../utils/ReducerActionType";
import { genereateCodeFromArray } from "../../utils/Functions";
import { ModalFetch } from "../Modal/ModalFetch/ModalFetch";

const downloadFile = (dispatch, items) => {
  download(`.-Generated with VMS-.\n${genereateCodeFromArray(items, 0)}`);
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

const sendToBack = async (dispatch, items, open, text) => {
  const dat = {
    content: `.-Generated with VMS-.\n${genereateCodeFromArray(items, 0)}`
  };
  fetch("http://localhost:5000/", {
    method: "POST",
    body: JSON.stringify(dat),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      open(true);
      text(data.output);
    });
};

const deleteAll = dispatch => {
  dispatch({ type: ReducerActionType.DELETEALL });
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
    action: deleteAll
  },
  {
    icon: "help",
    action: "help"
  }
];

export const Action = ({ items, dispatch }) => {
  const [responeOpen, setResponeOpen] = useState(false);
  const [responeText, setResponeText] = useState("");
  return (
    <>
      <ModalFetch
        isOpen={responeOpen}
        toggle={() => {
          setResponeOpen(false);
        }}
        data={responeText}
      />
      <div className={actions}>
        <ul>
          {names.map(item => {
            return (
              <ActionItem
                name={item.icon}
                action={() => {
                  item.action(dispatch, items, setResponeOpen, setResponeText);
                }}
                key={item.icon}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
