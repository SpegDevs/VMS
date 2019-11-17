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
import { IfCard } from "./IfCard/IfCard";
import ReducerActionType from "../../utils/ReducerActionType";
import { SimpleCard } from "./SimpleCard/SimpleCard";

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

const CardLayout = ({ dispatch, item, children }) => {
  return (
    <>
      <div className={card}>
        <div className={header}>
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
          <h3>{item.type}</h3>
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
          <CardLayout dispatch={dispatch} item={item}>
            <IfCard dispatch={dispatch} item={item} />
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
        break;
    }
  };

  return <div className={wrapper}>{Card()}</div>;
};
