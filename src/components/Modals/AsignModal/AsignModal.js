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

export const AsignModal = props => {
    return (
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader tag="div">
          <h3>Asign statement</h3>
          <div className={style.tooltip}>
            <i className="material-icons">info_outline</i>
            <span className={style.tooltipText}>{props.tutorial}</span>
          </div>
        </ModalHeader>
        <ModalBody>
          <h3>Asign</h3>
          <div>
            <label htmlFor="asign">Asign a variable a value</label>
            <Input type="text" id="asign"></Input>
          </div>
        </ModalBody>
        <Modal></Modal>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              props.toggle(ComponentType.ASIGN);
            }}
          >
            Cancel
          </Button>
          <Button
            className={style.sucess}
            onClick={() => {
              props.toggle(
                ComponentType.ASIGN,
                document.querySelector("#asign").value
              );
            }}
          >
            Continue
          </Button>
        </ModalFooter>
      </Modal>
    );
  };
  