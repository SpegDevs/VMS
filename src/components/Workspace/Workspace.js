import React from "react";
import { useDrop } from "react-dnd";
import { Modal } from "reactstrap";

import ItemTypes from "../../utils/ItemTypes";
import style from "./Workspace.module.css";
import ComponentType from "../../utils/ComponentType";
import { IfModal } from "../Modals/Modal";

const WorkspacePane = props => {
  const [_, drop] = useDrop({
    accept: ItemTypes.COMPONENT,
    drop: item => {
      props.handler(item.id);
    }
  });
  return (
    <div ref={drop} className={style.workspace}>
      {props.text}
    </div>
  );
};

const initialState = {
  text: "",
  isIfOpen: false,
  vairables: ["x", "y"],
  condition: [">", "<", ">=", "<=", "==", "!"]
};

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.toggleModals = this.toggleModals.bind(this);
    this.pushToCode = this.pushToCode.bind(this);
    this.pushToCode = this.pushIf.bind(this);
  }

  toggleModals(type, condition = "") {
    switch (type) {
      case ComponentType.IF:
        this.setState({
          ...this.state,
          isIfOpen: !this.state.isIfOpen
        });
        break;
      case ComponentType.ITERATION:
        this.setState({
          ...this.state,
          isIfOpen: !this.state.isIfOpen
        });
        break;
    }
  }

  pushIf() {
    this.setState({
      ...this.state,
      isIfOpen: true
    });
  }

  pushToCode(id) {
    switch (id) {
      case ComponentType.IF:
        break;
      case ComponentType.DECLARE:
        break;
      case ComponentType.ASIGN:
        break;
      case ComponentType.ITERATION:
        break;
      case ComponentType.INPUT:
        break;
      case ComponentType.OUTPUT:
        break;
    }
  }

  render() {
    return (
      <>
        <IfModal
          isOpen={this.state.isIfOpen}
          toggle={this.toggleModals}
          variables={this.state.vairables}
          conditions={this.state.condition}
        />
        <WorkspacePane handler={this.pushToCode} text={this.state.text} />
      </>
    );
  }
}

export default Workspace;
