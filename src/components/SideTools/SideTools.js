import React from "react";
import "./SideTools.module.css";
import {SideItem} from "./../SideItems/SideItems";
import {DndProvider} from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend";

const data = [
  {img:"/img/IF.png", title:"if"},
  {img:"/img/declare.png", title:"declare"},
  {img:"/img/asign.png", title:"asign"},
  {img:"/img/iteration.png", title:"iteration"},
  {img:"/img/input.png", title:"input"},
  {img:"/img/output.png", title:"output"},
]

export const SideTools = props => {
  return <div className="main">
    {data.map((item, index)=>{
      return <DndProvider backend={HTML5Backend} key={index}>
        <SideItem img={item.img} title={item.title}/>
      </DndProvider>
    })}
  </div>;
};
