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

const types = ["int", "dec", "str", "char", "bool"];
const variableType = ["variable", "array"];

const initState = {
    isArray: false,
}

export class DeclareModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...initState }
        this.changeArray = this.changeArray.bind(this);
    }


    changeArray(value) {
        const newState = value === variableType[1];
        this.setState({
            ...this.state,
            isArray: newState
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader tag="div">
                    <h3>Declare statement</h3>
                    <div className={style.tooltip}>
                        <i className="material-icons">info_outline</i>
                        <span className={style.tooltipText}>{this.props.tutorial}</span>
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
                                this.changeArray(e.target.options[e.target.selectedIndex].value)
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
                        {this.state.isArray && (
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
                            this.props.toggle(ComponentType.DECLARE);
                            this.setState({
                                isArray: false,
                            })
                        }}
                    >
                        Cancel
            </Button>
                    <Button
                        className={style.sucess}
                        onClick={() => {
                            const e = document.querySelector("#declareType");
                            const value = document.querySelector("#declare").value;
                            let declaretion = "";
                            const type = e.options[e.selectedIndex].value;
                            if (this.state.isArray) {
                                declaretion = `arr[${type}, ${document.querySelector("#arrayLength").value}] ${value}`
                            } else {
                                declaretion = `${type} ${value}`
                            }
                            this.props.toggle(ComponentType.DECLARE, declaretion);
                            this.setState({
                                isArray: false,
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