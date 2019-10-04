import React from "react";
import {DropTarget} from "react-dnd"

const boxSource = {
    beginDrop(props){
        const item = {id:props.id}
        return item;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
          return
        }
        const item = monitor.getItem()
        const dropResult = monitor.getDropResult()
        console.log(item.id);
    },
}

function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }
  }

class Workspace extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.children);
        return <>{this.props.children}</>;
    }

}

export default DropTarget('box' ,boxSource, collect)(Workspace);

