import React from "react";
import { Container } from "react-smooth-dnd";
import { conContainer } from "./../IfCard/IfCard.module.scss";
import { Input } from "reactstrap";
import ReducerActionType from "../../../utils/ReducerActionType";
import { CardWrapper } from "../Card";
import { forClass, conditionInput } from "./LoopCard.module.scss";

const DragAreaLoop = ({ dispatch, item }) => {
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

export const LoopCard = ({ item, dispatch }) => {
  const Condition =
    item.loopType === "for" ? (
      <div className={forClass}>
        <label>
          Init a variable
          <Input
            id="init"
            placeholder="int x=10"
            value={item.init}
            onChange={e => {
              dispatch({
                type: ReducerActionType.MODIFY,
                payload: {
                  id: item.id,
                  value: e.target.value,
                  loopField: "init"
                }
              });
            }}
          />
        </label>
        <label>
          Stop Condition
          <Input
            id="condition"
            placeholder="x<12"
            value={item.condition}
            onChange={e => {
              dispatch({
                type: ReducerActionType.MODIFY,
                payload: {
                  id: item.id,
                  value: e.target.value,
                  loopField: "condition"
                }
              });
            }}
          />
        </label>
        <label>
          Increment
          <Input
            id="increment"
            placeholder="x=x+1"
            value={item.increment}
            onChange={e => {
              dispatch({
                type: ReducerActionType.MODIFY,
                payload: {
                  id: item.id,
                  value: e.target.value,
                  loopField: "increment"
                }
              });
            }}
          />
        </label>
      </div>
    ) : (
      <div className={conditionInput}>
        <Input
          id="condition"
          placeholder="x<10"
          value={item.condition}
          onChange={e => {
            dispatch({
              type: ReducerActionType.MODIFY,
              payload: {
                id: item.id,
                value: e.target.value,
                loopField: "condition"
              }
            });
          }}
        />
      </div>
    );
  return (
    <>
      {Condition}
      <div className={conContainer}>
        <DragAreaLoop dispatch={dispatch} item={item} />
      </div>
    </>
  );
};
