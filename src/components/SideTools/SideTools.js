import React from "react";
import style from "./SideTools.module.css";
import { SideItem } from "./../SideItems/SideItems";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ComponentType from "../../utils/ComponentType";

const data = [
  { id: ComponentType.IF, img: "/img/IF.png", title: "if" },
  { id: ComponentType.DECLARE, img: "/img/declare.png", title: "declare" },
  { id: ComponentType.ASIGN, img: "/img/operation.png", title: "asign" },
  {
    id: ComponentType.ITERATION,
    img: "/img/iteration.png",
    title: "iteration"
  },
  { id: ComponentType.IO, img: "/img/asign.png", title: "IO" },
];

export const SideTools = props => {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        {data.map((item, index) => {
          return (
            <DndProvider backend={HTML5Backend} key={index}>
              <SideItem item={item} />
            </DndProvider>
          );
        })}
      </div>
      <div className={style.coverBar}></div>
    </div>
  );
};
