import React from "react";
import { Input } from "reactstrap";
import ReducerActionType from "../../../utils/ReducerActionType";
import { content } from "./DeclareCard.module.scss";

export const DeclareCard = ({ item, dispatch }) => {
  return (
    <div className={content}>
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
