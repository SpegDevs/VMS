import React from 'react';
import style from "./SideItems.module.css";
import {useDrag} from "react-dnd";

export const SideItem = (props) => {

    const [{opacity}, dragRef]=useDrag({
        item: {type:"box", text:props.title},
        collect:monitor => ({
            opacity:monitor.isDragging()?0.5:1,
        })
    });

    return <div className={style.item} ref={dragRef} style={{opacity}}>
        <div className={style.item_logo}>
            <img src={props.img} alt={props.title}/>
        </div>
        <div className={style.title}>
            <p>{props.title}</p>
        </div>
    </div>
}