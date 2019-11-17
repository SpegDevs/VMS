import React from "react";
import { conContainer } from "./IfCard.module.scss";
import { Container } from "react-smooth-dnd";
import ReducerActionType from "../../../utils/ReducerActionType";
import { CardWrapper } from "../Card";

export const IfCard = ({ dispatch, item }, ...props) => {
  return (
    <div className={conContainer}>
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
    </div>
  );
};
