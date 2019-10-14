import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import ComponentType from "../../../utils/ComponentType";
import style from "./../Modal.module.css";

const type = ["Input", "Output"];

const initialState = {
  isInput: true,
}

export class IOModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(value) {
    const newState = value === type[0];
    this.setState({
      ...this.state,
      isInput: newState
    });
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={style.modal}>
        <ModalHeader tag="div">
          <h3>Input - Output statement</h3>
          <div className={style.tooltip}>
            <i className="material-icons">info_outline</i>
            <span className={style.tooltipText}>{this.props.tutorial}</span>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className={style.ifBody}>
            <label htmlFor="type">Enter a condition</label>
            <Input type="select" id="type" onChange={(e) => {
              this.inputChangeHandler(e.target.options[e.target.selectedIndex].value)
            }}>
              {type.map((element, index) => {
                return <option key={index} value={element}>{element}</option>
              })}
            </Input>
            {this.state.isInput && <Input id="variable" placeholder="Enter a variable" />}
            <Input id="input" placeholder="Enter a text" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              this.props.toggle(ComponentType.INPUT, "");
              this.setState({
                isInput: true,
              })
            }}
          >
            Cancel
                </Button>
          <Button
            className={style.sucess}
            onClick={() => {

              if (this.state.isInput) {
                this.props.toggle(
                  ComponentType.INPUT,
                  `${document.querySelector("#variable").value}=in(${document.querySelector("#input").value})`
                );
              } else {
                this.props.toggle(
                  ComponentType.INPUT,
                  `out(${document.querySelector("#input").value})`
                );
              }
              this.setState({
                isInput: true,
              })
            }}
          >
            Continue
                </Button>
        </ModalFooter>
      </Modal>
    );
  }

};