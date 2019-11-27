import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import {
  sucess,
  tooltip,
  tooltipText,
  ifBody,
  centerBody,
  switchButton,
  slider,
  round,
  inputC
} from "./Modal.module.scss";
import ItemTypes from "../../utils/ItemTypes";
import ReducerActionType from "../../utils/ReducerActionType";
import { Template } from "../../utils/ItemTemplate";

const Content = props => {
  switch (props.payload.type) {
    case ItemTypes.IF:
      return <IfContent />;
    case ItemTypes.ELSE:
      return <ElseContent />;
    case ItemTypes.DECLARE:
      return <DeclareContent />;
    case ItemTypes.ASIGN:
      return <AsignContent />;
    default:
      return null;
  }
};

const Header = ({ type, tutorial }) => {
  return (
    <ModalHeader tag="div">
      <h3>{`${type} statement`}</h3>
      <div className={tooltip}>
        <i className="material-icons">info_outline</i>
        <span className={tooltipText}>{tutorial}</span>
      </div>
    </ModalHeader>
  );
};

const IfContent = ({ toggle }) => {
  return (
    <>
      <Header type={ItemTypes.IF} />
      <ModalBody>
        <div className={ifBody}>
          <div>
            <label htmlFor="condition">Enter a condition</label>
            <Input type="text" id="condition"></Input>
          </div>
          {/* <div>
            <label htmlFor="else">Has an else clause?</label>
            <label className={switchButton}>
              <input id="else" type="checkbox" className={inputC} />
              <span className={`${slider} ${round}`}></span>
            </label>
          </div> */}
        </div>
      </ModalBody>
    </>
  );
};

const ElseContent = () => {
  return (
    <>
      <Header type={ItemTypes.ELSE} />
    </>
  );
};

const LoopContent = () => {
  return (
    <>
      <Header type={ItemTypes.LOOP} />
    </>
  );
};
const AsignContent = () => {
  return (
    <>
      <Header type={ItemTypes.ASIGN} />
      <ModalBody>
        <div className={centerBody}>
          <div>
            <label htmlFor="asign">Assigns a value to a variable</label>
            <Input type="text" id="asign"></Input>
          </div>
        </div>
      </ModalBody>
    </>
  );
};
const DeclareContent = () => {
  const types = ["int", "dec", "str", "char", "bool"];
  const variableType = ["variable", "array"];
  const [isArray, setIsArray] = useState(false);
  return (
    <>
      <Header type={ItemTypes.DECLARE} />
      <ModalBody>
        <div>
          <label htmlFor="declare">Enter a variable</label>
          <Input
            type="select"
            id="declareVariable"
            onChange={e => {
              setIsArray(
                e.target.options[e.target.selectedIndex].value ===
                  variableType[1]
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
          {isArray && (
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
    </>
  );
};

export const ModalWrapper = props => {
  const { drop, isOpen, toggle, dispatch, inner } = props;

  return (
    <Modal isOpen={isOpen} toggle={() => toggle()}>
      <Content {...drop} />
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => {
            toggle();
          }}
        >
          Cancel
        </Button>
        <Button
          className={sucess}
          onClick={() => {
            let template = Template(drop.payload);
            console.log(template);
            switch (drop.payload.type) {
              case ItemTypes.IF:
                template.condition = document.querySelector("#condition").value;
                break;
              case ItemTypes.DECLARE:
                const declareVariable = document.querySelector(
                  "#declareVariable"
                );
                const content = document.querySelector("#declare");
                const type = document.querySelector("#declareType");
                const arrayLength = document.querySelector("#arrayLength");
                template.content = `${content.value}`;
                template.isArray = `${declareVariable.options[
                  declareVariable.selectedIndex
                ].value === "array"}`;
                template.variableType = `${
                  type.options[type.selectedIndex].value
                }`;
                if (arrayLength) {
                  template.arrayLength = arrayLength.value;
                }
                break;
              default:
                break;
            }
            dispatch({
              type: inner
                ? ReducerActionType.INSERTFROMMODALONINNER
                : ReducerActionType.INSERTFROMMODAL,
              payload: { ...drop, template }
            });
          }}
        >
          Continue
        </Button>
      </ModalFooter>
    </Modal>
  );
};
