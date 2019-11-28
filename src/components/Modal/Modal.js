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
  forClass,
  switchButton,
  slider,
  round,
  inputC,
  functionArea,
  functionSelection
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
    case ItemTypes.LOOP:
      return <LoopContent />;
    case ItemTypes.OUTPUT:
      return <OutputContent />;
    case ItemTypes.INPUT:
      return <InputContent />;
    default:
      return null;
  }
};

const defaultFunction = [
  { name: "Max", params: 2 },
  { name: "Min", params: 2 },
  { name: "Random", params: 2 },
  { name: "Factorial", params: 1 },
  { name: "Pow", params: 1 },
  { name: "Sqrt", params: 2 },
  { name: "Ceil", params: 1 },
  { name: "Floor", params: 1 },
  { name: "Round", params: 1 },
  { name: "Substring", params: 1 }
];

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
  const types = ["for", "while", "do-while"];
  const [type, setType] = useState(types[0]);
  return (
    <>
      <Header type={ItemTypes.LOOP} />
      <ModalBody>
        <div>
          <label htmlFor="loopType">Select an loop structure</label>
          <Input
            type="select"
            id="loopType"
            onChange={({ target }) => {
              setType(types[target.selectedIndex]);
            }}
          >
            {types.map((element, index) => {
              return (
                <option value={element} key={index}>
                  {element}
                </option>
              );
            })}
          </Input>
          {type !== types[0] && (
            <div className={forClass}>
              <label>
                Condition
                <Input id="condition" placeholder="x<12" />
              </label>
            </div>
          )}
          {type === types[0] && (
            <div className={forClass}>
              <label>
                Init a variable
                <Input id="init" placeholder="int x=10" />
              </label>
              <label>
                Stop Condition
                <Input id="condition" placeholder="x<12" />
              </label>
              <label>
                Variable increment
                <Input id="increment" placeholder="x=x+1" />
              </label>
            </div>
          )}
        </div>
      </ModalBody>
    </>
  );
};

const OutputContent = () => {
  return (
    <>
      <Header type={ItemTypes.OUTPUT} />
      <ModalBody>
        <div className={centerBody}>
          <div>
            <Input type="text" id="output" placeholder="Ouput"></Input>
          </div>
        </div>
      </ModalBody>
    </>
  );
};

const InputContent = () => {
  return (
    <>
      <Header type={ItemTypes.INPUT} />
      <ModalBody>
        <div className={centerBody}>
          <div>
            <Input type="text" id="input" placeholder="Input"></Input>
          </div>
        </div>
      </ModalBody>
    </>
  );
};

const AsignContent = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Header type={ItemTypes.ASIGN} />
      <ModalBody>
        <div>
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
  const [checked, setChecked] = useState(false);
  const [functionSelected, setFunctionSelected] = useState(0);
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
          <div className={functionArea}>
            <div>
              <label htmlFor="function">
                Asign a function value to your variable?
              </label>
              <label className={switchButton}>
                <input
                  type="checkbox"
                  className={inputC}
                  id="function"
                  onChange={({ target }) => {
                    setChecked(target.checked);
                  }}
                />
                <span className={`${slider} ${round}`} />
              </label>
            </div>
            {checked && !isArray && (
              <div className={functionSelection}>
                <Input
                  type="select"
                  id="functionType"
                  onChange={({ target }) => {
                    setFunctionSelected(target.selectedIndex);
                  }}
                >
                  {defaultFunction.map((element, index) => {
                    return (
                      <option value={element.name} key={index}>
                        {element.name}
                      </option>
                    );
                  })}
                </Input>
                <Input type="text" id="params" placeholder="Function params" />
                <div className={tooltip}>
                  <i className="material-icons">info_outline</i>
                  <span className={tooltipText}>
                    Enter {defaultFunction[functionSelected].params} params
                  </span>
                </div>
              </div>
            )}
          </div>
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
            switch (drop.payload.type) {
              case ItemTypes.IF:
                template.condition = document.querySelector("#condition").value;
                break;
              case ItemTypes.DECLARE:
                const declareVariable = document.querySelector(
                  "#declareVariable"
                );
                const content = document.querySelector("#declare");
                template.isFunction = document.querySelector(
                  "#function"
                ).checked;
                if (template.isFunction) {
                  template.functionType = document.querySelector(
                    "#functionType"
                  ).options[
                    document.querySelector("#functionType").selectedIndex
                  ].value;
                  template.params = document.querySelector("#params").value;
                }
                const type = document.querySelector("#declareType");
                const arrayLength = document.querySelector("#arrayLength");
                template.content = `${content.value}`;
                template.isArray =
                  declareVariable.options[declareVariable.selectedIndex]
                    .value === "array";
                template.variableType = `${
                  type.options[type.selectedIndex].value
                }`;
                if (arrayLength) {
                  template.arrayLength = arrayLength.value;
                }
                break;
              case ItemTypes.LOOP:
                const loopType = document.querySelector("#loopType");
                const condition = document.querySelector("#condition").value;
                template.loopType =
                  loopType.options[loopType.selectedIndex].value;
                template.condition = condition;
                if (template.loopType === "for") {
                  template.init = document.querySelector("#init").value;
                  template.increment = document.querySelector(
                    "#increment"
                  ).value;
                }
                break;
              case ItemTypes.ASIGN:
                template.content = document.querySelector("#asign").value;
                break;
              case ItemTypes.OUTPUT:
                template.content = document.querySelector("#output").value;
                break;
              case ItemTypes.INPUT:
                template.content = document.querySelector("#input").value;
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
