import React, { useReducer } from "react";
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

const initState = {
  count: 0,
  items: []
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

function onInnerDrop(dropResult, { items, count }) {
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
    return { items: newItems, count: shouldUpdateCount ? count + 1 : count };
  }
  return { items, count };
}

function onDrop(dropResult, { items, count }) {
  const { removedIndex, addedIndex, payload } = dropResult;
  console.log(dropResult);
  const [newItems, shouldUpdateIndex] = insertElementIntoArray(
    Template(payload),
    removedIndex,
    addedIndex,
    items,
    count
  );
  return {
    items: newItems,
    count: shouldUpdateIndex ? count + 1 : count
  };
}

function edit({ id, value }, { items, count }) {
  const newItems = modifyFromNestedArray(id, value, [...items]);
  return { items: newItems, count };
}

export const Ide = () => {
  /* const [moeCode, setMoeCode] = useState(".-Generated with VMS-.\n"); */
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  return (
    <main className={main}>
      <SideTools />
      <div className={workspace}>
        <Workspace items={state.items} dispatch={dispatch} />
      </div>
      <div className={functions}></div>
    </main>
  );
};
