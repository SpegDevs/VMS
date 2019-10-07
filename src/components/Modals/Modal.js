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

const types = ["int", "dec", "str", "char", "bool"];
const variableType = ["variable", "array"];

export const DeclareModal = props => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader tag="div">
        <h3>Declare statement</h3>
        <div className={style.tooltip}>
          <i className="material-icons">info_outline</i>
          <span className={style.tooltipText}>{props.tutorial}</span>
        </div>
      </ModalHeader>
      <ModalBody>
        <h3>Declaration</h3>
        <div>
          <label htmlFor="declare">Enter a variable</label>
          <Input
            type="select"
            id="declareVariable"
            onChange={e => {
              props.selectingArray(
                e.target.options[e.target.selectedIndex].value === "variable"
                  ? false
                  : true
              );
            }}
          >
            {variableType.map((element, index) => {
              return (
                <option value={element} key={index}>
                  {element}
                </option>
              );
            })}
          </Input>
          <Input type="select" id="declareType">
            {types.map((element, index) => {
              return (
                <option value={element} key={index}>
                  {element}
                </option>
              );
            })}
          </Input>
          {props.isSelectingArray && (
            <Input
              type="number"
              id="arrayLength"
              placeholder="Array size"
              min="1"
            />
          )}
          <Input type="text" id="declare" />
        </div>
      </ModalBody>
      <Modal></Modal>
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => {
            props.toggle(ComponentType.DECLARE);
          }}
        >
          Cancel
        </Button>
        <Button
          className={style.sucess}
          onClick={() => {
            const e = document.querySelector("#declareType");
            const declaretion = `${e.options[e.selectedIndex].value} ${
              document.querySelector("#declare").value
            }`;
            props.toggle(ComponentType.DECLARE, declaretion);
          }}
        >
          Continue
        </Button>
      </ModalFooter>
    </Modal>
  );
};

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
