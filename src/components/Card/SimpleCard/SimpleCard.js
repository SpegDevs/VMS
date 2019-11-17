import React from "react";
import { Input } from "reactstrap";
import { content } from "./SimpleCard.module.scss";
import ReducerActionType from "../../../utils/ReducerActionType";

export const SimpleCard = ({ item, dispatch }) => {
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
