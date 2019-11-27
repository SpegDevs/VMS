import React from "react";
import { CardWrapper, CardBounds } from "../Card/Card";
import { Container, Draggable } from "react-smooth-dnd";
import ItemTypes from "../../utils/ItemTypes";
import { pane, workspace } from "./Workspace.module.scss";
import { Action } from "../Action/Action";
import ReducerActionType from "../../utils/ReducerActionType";

const Workspace = ({ items, dispatch }) => {
  return (
    <div className={pane}>
      <Action items={items} dispatch={dispatch} />
      <div className={workspace}>
        <CardBounds item={{ type: ItemTypes.START }} />
        <div className="container">
          <Container
            groupName={ReducerActionType.DROP}
            onDrop={dropResult =>
              dispatch({
                type: ReducerActionType.DROP,
                payload: dropResult
              })
            }
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: "drop-preview"
            }}
            dragClass="card-ghost"
            dropClass="card-ghost-drop"
            dropPlaceholderAnimationDuration={200}
            getChildPayload={i => {
              return { type: items[i].type };
            }}
          >
            {items.map(item => {
              return (
                <Draggable key={item.id}>
                  <CardWrapper dispatch={dispatch} item={item} />
                </Draggable>
              );
            })}
          </Container>
        </div>
        <CardBounds item={{ type: ItemTypes.END }} />
      </div>
    </div>
  );
};

export default Workspace;
