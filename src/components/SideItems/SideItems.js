import React from "react";
import style from "./SideItems.module.css";
import { useDrag } from "react-dnd";
import ItemTypes from "../../utils/ItemTypes";

export const SideItem = props => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.COMPONENT, id: props.item.id },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  return (
    <div className={style.item} ref={dragRef} style={{ opacity }}>
      <div className={style.item_logo}>
        <img src={props.item.img} alt={props.item.title} />
      </div>
      <div className={style.title}>
        <p>{props.item.title}</p>
      </div>
    </div>
  );
};
