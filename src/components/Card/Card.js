import React from "react";
import {
  card,
  special,
  arrow,
  wrapper,
  header,
  actions
} from "./Card.module.scss";
import ItemTypes from "../../utils/ItemTypes";
import { IfAndElseCard } from "./IfCard/IfCard";
import ReducerActionType from "../../utils/ReducerActionType";
import { SimpleCard } from "./SimpleCard/SimpleCard";
import { Input } from "reactstrap";

export const CardBounds = ({ item }) => {
  return (
    <div className={wrapper}>
      <div className={`${card} ${special}`}>
        <h3>{item.type}</h3>
      </div>
      {item.type === ItemTypes.START ? (
        <i className={`material-icons ${arrow}`}>arrow_downward</i>
      ) : null}
    </div>
  );
};

const CardLayout = ({ dispatch, item, children, condition }) => {
  return (
    <>
      <div className={card}>
        <div className={header}>
          <h3>{item.type}</h3>
          {condition && (
            <Input
              placeholder={item.placeholder}
              value={item.condition}
              onChange={e => {
                dispatch({
                  type: ReducerActionType.MODIFY,
                  payload: { id: item.id, value: e.target.value }
                });
              }}
            />
          )}
          <div className={actions}>
            <i className="material-icons">content_copy</i>
            <i
              className="material-icons"
              onClick={() =>
                dispatch({ type: ReducerActionType.DELETE, payload: item.id })
              }
            >
              delete
            </i>
          </div>
        </div>
        {children}
      </div>
      <i className={`material-icons ${arrow}`}>arrow_downward</i>
    </>
  );
};

export const CardWrapper = ({ dispatch, item }) => {
  const Card = () => {
    switch (item.type) {
      case ItemTypes.IF:
        return (
          <CardLayout dispatch={dispatch} item={item} condition>
            <IfAndElseCard dispatch={dispatch} item={item} />
          </CardLayout>
        );
      case ItemTypes.ELSE:
        return (
          <CardLayout dispatch={dispatch} item={item}>
            <IfAndElseCard dispatch={dispatch} item={item} />
          </CardLayout>
        );
      case ItemTypes.ASIGN:
      case ItemTypes.DECLARE:
      case ItemTypes.INPUT:
      case ItemTypes.OUTPUT:
      case ItemTypes.STATEMENT:
        return (
          <CardLayout dispatch={dispatch} item={item}>
            <SimpleCard item={item} dispatch={dispatch} />
          </CardLayout>
        );
      default:
        return null;
    }
  };

  return <div className={wrapper}>{Card()}</div>;
};
