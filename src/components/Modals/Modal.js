import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import ComponentType from "../../utils/ComponentType";
import style from "./Modal.module.css";

export const IfModal = props => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} className={style.modal}>
      <ModalBody>
        <h3>Select a condition</h3>
        <br />
        <br />
        <div className={style.ifBody}>
          <label htmlFor="condition">Enter a condition</label>
          <Input type="text" id="condition"></Input>
        </div>
      </ModalBody>
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
            console.log(`if(${document.querySelector("#condition").value})`);
            props.toggle(ComponentType.IF);
          }}
        >
          Accept
        </Button>
      </ModalFooter>
    </Modal>
  );
};
