import React, { useState } from "react";
import ItemTypes from "../../utils/ItemTypes";
import { Container, Draggable } from "react-smooth-dnd";
import {
  placeholder,
  logo,
  side,
  bar,
  drop,
  statements
} from "./SideTools.module.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ReducerActionType from "../../utils/ReducerActionType";
const items = [
  { id: 0, type: ItemTypes.DECLARE },
  { id: 1, type: ItemTypes.ASIGN },
  { id: 2, type: ItemTypes.IF },
  { id: 3, type: ItemTypes.ELSE },
  { id: 4, type: ItemTypes.LOOP },
  { id: 6, type: ItemTypes.OUTPUT }
];

export const SideItem = ({ item }, ...props) => (
  <div className={`${placeholder}`}>
    <h3>{item.type}</h3>
  </div>
);

const dropDownItems = ["Statements", "Inner Statements"];
const groupType = {
  [dropDownItems[0]]: ReducerActionType.DROP,
  [[dropDownItems[1]]]: ReducerActionType.INNERDROP
};

export const SideTools = ({ dispatch }, ...props) => {
  const [isOpen, toggle] = useState(false);
  const [dropState, setDropState] = useState(dropDownItems[0]);
  const [group, setGroup] = useState(groupType[dropDownItems[0]]);
  return (
    <div className={side}>
      <div className={logo}>
        <img src="vms.png" alt="vaquita" />
      </div>
      <div className={bar}>
        <div className={drop}>
          <Dropdown isOpen={isOpen} toggle={() => toggle(!isOpen)}>
            <DropdownToggle caret>{dropState}</DropdownToggle>
            <DropdownMenu>
              {dropDownItems.map((item, index) => {
                return (
                  <DropdownItem
                    key={index}
                    onClick={() => {
                      setDropState(item);
                      setGroup(groupType[item]);
                    }}
                  >
                    {item}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className={statements}>
          <Container
            groupName={group}
            behaviour="copy"
            onDrop={dropResult =>
              dispatch({ type: group, payload: dropResult })
            }
            getChildPayload={i => {
              return { type: items[i].type, new: true };
            }}
          >
            {items.map((item, index) => {
              return (
                <Draggable key={`xxx${item.id}`}>
                  <SideItem item={item} />
                </Draggable>
              );
            })}
          </Container>
        </div>
      </div>
    </div>
  );
};
