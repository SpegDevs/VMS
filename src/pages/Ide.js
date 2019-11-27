import React, { useState, useReducer } from "react";
import { SideTools } from "../components/SideTools/SideTools";
import { main, workspace, functions } from "./Ide.module.css";
import Workspace from "../components/Workspace/Workspace";
import {
  insertElementIntoArray,
  insertElementIntoNestedArray,
  removeElementFromNestedArray,
  modifyFromNestedArray
} from "../utils/Functions";
import { Template } from "../utils/ItemTemplate";
import ReducerActionType from "../utils/ReducerActionType";
import ItemTypes from "../utils/ItemTypes";
import { ModalWrapper } from "../components/Modal/Modal";

const initState = {
  count: 0,
  items: [],
  isOpen: false,
  object: {}
};

function reducer(state, action) {
  switch (action.type) {
    case ReducerActionType.DROP:
      return onDrop(action.payload, state);
    case ReducerActionType.INNERDROP:
      return onInnerDrop(action.payload, state);
    case ReducerActionType.DELETE:
      return deleteItem(action.payload, state);
    case ReducerActionType.MODIFY:
      return edit(action.payload, state);
    case ReducerActionType.DELETEALL:
      return { items: [], count: state.count };
    case ReducerActionType.INSERTFROMMODAL:
      return insertFromModal(action.payload, state);
    case ReducerActionType.INSERTFROMMODALONINNER:
      return insertFromModalonInnerDrop(action.payload, state);
    case ReducerActionType.CHANGEOPEN:
      return { ...state, isOpen: !state.isOpen };
    case ReducerActionType.CLOSEMODAL:
      return { ...state, isOpen: false };
    default:
      break;
  }
}

function deleteItem(id, { items, count }) {
  const newItems = removeElementFromNestedArray(id, items.slice());
  return {
    items: newItems,
    count: count
  };
}

function insertFromModalonInnerDrop(
  dropResult,
  { items, count, isOpen, object }
) {
  const { removedIndex, addedIndex, payload, parent } = dropResult;
  if (addedIndex !== null) {
    const newItems = [...items];
    let shouldUpdateCount;
    for (const element in newItems) {
      const result = insertElementIntoNestedArray(
        newItems[element],
        parent,
        Template(payload),
        removedIndex,
        addedIndex,
        count
      );
      if (result) {
        shouldUpdateCount = result[1];
        newItems[element].content = result[0];
      }
    }
    return {
      items: newItems,
      count: shouldUpdateCount ? count + 1 : count,
      isOpen: false,
      object
    };
  }
  return { items, count, isOpen: false, object };
}

function onInnerDrop(dropResult, { items, count }) {
  return {
    items,
    count,
    object: dropResult,
    isOpen: dropResult.payload.new ? true : false,
    inner: true
  };
}

function insertFromModal(dropResult, { items, count, isOpen, object }) {
  const { removedIndex, addedIndex, payload, parent, template } = dropResult;
  const [newItems, shouldUpdateIndex] = insertElementIntoArray(
    template,
    removedIndex,
    addedIndex,
    items,
    count
  );
  return {
    items: newItems,
    count: shouldUpdateIndex ? count + 1 : count,
    isOpen: false,
    object
  };
}

function onDrop(dropResult, { items, count }) {
  return {
    items,
    count,
    object: dropResult,
    isOpen: dropResult.payload.new ? true : false
  };
}

function edit({ id, value }, { items, count }) {
  const newItems = modifyFromNestedArray(id, value, [...items]);
  return { items: newItems, count };
}

export const Ide = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <ModalWrapper
        isOpen={state.isOpen}
        toggle={() => {
          dispatch({ type: ReducerActionType.CHANGEOPEN });
        }}
        dispatch={dispatch}
        drop={state.object}
        inner={state.inner}
      />
      <main className={main}>
        <SideTools />
        <div className={workspace}>
          <Workspace items={state.items} dispatch={dispatch} />
        </div>
        <div className={functions}></div>
      </main>
    </>
  );
};
