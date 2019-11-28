import React, { useReducer } from "react";
import { SideTools } from "../components/SideTools/SideTools";
import { main, workspace } from "./Ide.module.scss";
import Workspace from "../components/Workspace/Workspace";
import {
  insertElementIntoArray,
  insertElementIntoNestedArray,
  removeElementFromNestedArray,
  modifyFromNestedArray
} from "../utils/Functions";
import { Template } from "../utils/ItemTemplate";
import ReducerActionType from "../utils/ReducerActionType";
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
      return { ...state, items: [] };
    case ReducerActionType.INSERTFROMMODAL:
      return insertFromModal(action.payload, state);
    case ReducerActionType.INSERTFROMMODALONINNER:
      return insertFromModalonInnerDrop(action.payload, state);
    case ReducerActionType.CHANGEOPEN:
      return { ...state, isOpen: !state.isOpen };
    case ReducerActionType.CLOSEMODAL:
      return { ...state, isOpen: false };
    case ReducerActionType.DELETECOPIEDOBJECT:
      return { ...state, copyObject: {} };
    default:
      break;
  }
}

function deleteItem(id, state) {
  const { items, count } = state;
  const newItems = removeElementFromNestedArray(id, items.slice());
  return {
    ...state,
    items: newItems,
    count: count
  };
}

function insertFromModalonInnerDrop(dropResult, state) {
  const { items, count } = state;
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
      ...state,
      items: newItems,
      count: shouldUpdateCount ? count + 1 : count,
      isOpen: false
    };
  }
  return { ...state, isOpen: false };
}

function onInnerDrop(dropResult, state) {
  console.log(dropResult);
  return {
    ...state,
    object: dropResult,
    isOpen: dropResult.payload.new ? true : false,
    inner: true
  };
}

function insertFromModal(dropResult, state) {
  const { items, count } = state;
  const { removedIndex, addedIndex, template } = dropResult;
  const [newItems, shouldUpdateIndex] = insertElementIntoArray(
    template,
    removedIndex,
    addedIndex,
    items,
    count
  );
  return {
    ...state,
    items: newItems,
    count: shouldUpdateIndex ? count + 1 : count,
    isOpen: false
  };
}

function onDrop(dropResult, state) {
  return {
    ...state,
    object: dropResult,
    isOpen: dropResult.payload.new ? true : false
  };
}

function edit(drop, state) {
  const { items } = state;
  const { id, value, loopField } = drop;
  const newItems = modifyFromNestedArray(id, value, [...items], loopField);
  return { ...state, items: newItems };
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
      </main>
    </>
  );
};
