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

export const IfModal = props => {
    return (
      <Modal isOpen={props.isOpen} toggle={props.toggle} className={style.modal}>
        <ModalHeader tag="div">
          <h3>If statement</h3>
          <div className={style.tooltip}>
            <i className="material-icons">info_outline</i>
            <span className={style.tooltipText}>{props.tutorial}</span>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className={style.ifBody}>
            <label htmlFor="condition">Enter a condition</label>
            <Input type="text" id="condition"></Input>
          </div>
        </ModalBody>
        <Modal></Modal>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              props.toggle(ComponentType.IF);
            }}
          >
            Cancel
          </Button>
          <Button
            className={style.sucess}
            onClick={() => {
              props.toggle(
                ComponentType.IF,
                document.querySelector("#condition").value
              );
            }}
          >
            Continue
          </Button>
        </ModalFooter>
      </Modal>
    );
  };