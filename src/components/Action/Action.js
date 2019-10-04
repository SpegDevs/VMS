import React from 'react';
import {ActionItem} from './../ActionItem/ActionItem';
import style from "./Action.module.css";

const names = ["play_arrow", "bug_report", "stop"]

export class Action extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return <ul>
            {names.map((name, index)=>{
                return <ActionItem name={name} key={index}/>
            })}
        </ul>
    }
}