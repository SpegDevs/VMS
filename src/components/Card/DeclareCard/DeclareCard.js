import React from "react";
import { Input } from "reactstrap";
import ReducerActionType from "../../../utils/ReducerActionType";
import { content } from "./DeclareCard.module.scss";

export const DeclareCard = ({ item, dispatch }) => {
  return (
    <div className={content}>
      <div>
        <h4>Variable info:</h4>
        <p>
          Type = {item.variableType}
          <br />
          Is an array = {item.isArray ? "Yes" : "No"}
          {item.isArray ? `Array size = ${item.arrayLength}${(<br />)}` : null}
          <br />
          Value = {item.functionType}({item.params})
        </p>
      </div>
      <Input
        placeholder={item.placeholder}
        value={item.content}
        onChange={e => {
          dispatch({
            type: ReducerActionType.MODIFY,
            payload: { id: item.id, value: e.target.value }
          });
        }}
      />
    </div>
  );
};
