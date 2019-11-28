import React from "react";
import { ActionItem } from "./../ActionItem/ActionItem";
import { actions } from "./Action.module.scss";
import { useMutate } from "restful-react";
import ReducerActionType from "../../utils/ReducerActionType";
import { genereateCodeFromArray } from "../../utils/Functions";

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

const sendToBack = async (_, items) => {
  /* return data; */
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
  const { mutate: send, laoding } = useMutate({
    
  })
  return (
    <div className={actions}>
      <ul>
        {names.map(item => {
          return (
            <ActionItem
              name={item.icon}
              action={() => {
                item.action(dispatch, items);
              }}
              key={item.icon}
            />
          );
        })}
      </ul>
    </div>
  );
};