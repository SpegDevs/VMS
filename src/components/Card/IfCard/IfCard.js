import React from "react";
import { conContainer } from "./IfCard.module.scss";
import { Container } from "react-smooth-dnd";
import ReducerActionType from "../../../utils/ReducerActionType";
import { CardWrapper } from "../Card";

const DragAreaIfElse = ({ dispatch, item }) => {
  return (
    <Container
      groupName={ReducerActionType.INNERDROP}
      onDrop={dropResult => {
        const newDropResult = { ...dropResult, parent: item.id };
        dispatch({
          type: ReducerActionType.INNERDROP,
          payload: newDropResult
        });
      }}
    >
      {item.content.map(item => {
        return <CardWrapper dispatch={dispatch} item={item} key={item.id} />;
      })}
    </Container>
  );
};

export const IfAndElseCard = ({ dispatch, item }, ...props) => {
  return (
    <div className={conContainer}>
      <DragAreaIfElse dispatch={dispatch} item={item} />
    </div>
  );
};
