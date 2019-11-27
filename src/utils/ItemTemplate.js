import ItemTypes from "./ItemTypes";

const template = {
  [ItemTypes.IF]: {
    id: null,
    type: ItemTypes.IF,
    placeholder: "Enter a condition",
    condition: "",
    content: []
  },
  [ItemTypes.ELSE]: {
    id: null,
    type: ItemTypes.ELSE,
    content: []
  },
  [ItemTypes.STATEMENT]: {
    id: null,
    type: ItemTypes.STATEMENT,
    placeholder: "Enter a statement",
    content: ""
  },
  [ItemTypes.INPUT]: {
    id: null,
    type: ItemTypes.INPUT,
    placeholder: "Enter an input",
    content: ""
  },
  [ItemTypes.OUTPUT]: {
    id: null,
    type: ItemTypes.OUTPUT,
    placeholder: "Enter an output",
    content: ""
  },
  [ItemTypes.ASIGN]: {
    id: null,
    type: ItemTypes.ASIGN,
    placeholder: "Enter a asigment",
    content: ""
  },
  [ItemTypes.DECLARE]: {
    id: null,
    type: ItemTypes.DECLARE,
    placeholder: "Enter a declaretion",
    variableType: "",
    isArray: false,
    arrayLength: 0,
    content: ""
  }
};

export const Template = ({ type }) => {
  return template[type];
};
