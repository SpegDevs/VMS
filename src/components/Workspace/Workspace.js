import React from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "../../utils/ItemTypes";
import style from "./Workspace.module.css";
import ComponentType from "../../utils/ComponentType";
import { IfModal } from "./../Modals/IfModal/IfModal";
import { DeclareModal } from "./../Modals/DeclareModal/DeclareModal";
import { AsignModal } from "./../Modals/AsignModal/AsignModal";
import { FlowWrapper } from "../FlowChartWrapper/FlowWrapper";
import { IOModal } from "../Modals/IOModal/IOModal";

const tutorial = {
    IF: `Enter an logic expresion such as x>10.\nValid expresions: >, <, >=, <=, ==, !=, !, &&, ||`,
    DECLARE:
        "Select a variable type and name it, you can create multiple variables of the same type separating them with a comma",
    ASIGN:
        "Asign a value to an existing variable, you can do multiple asignments separating them with an semicolon with no space",
    IO:
        "Select input if you want write a text or number or output if you want to print a variable or a plain text"
};

const WorkspacePane = props => {
    const [_, drop] = useDrop({
        accept: ItemTypes.COMPONENT,
        drop: item => {
            props.handler(item.id);
        }
    });
    return (
        <div ref={drop} className={style.workspace}>
            <FlowWrapper code={props.code} />
        </div>
    );
};

const initialState = {
    text: "",
    isIfOpen: false,
    isDeclareOpen: false,
    isAsignOpen: false,
    isIterationOpen: false,
    isSelectingArray: false,
    isIOOpen: false,
    count: 0,
    flowCode: ["start=>start: start", "end=>end: end", "start->end"],
};

class Workspace extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
        this.toggleModals = this.toggleModals.bind(this);
        this.pushToCode = this.pushToCode.bind(this);
        this.pushIf = this.pushIf.bind(this);
        this.pushDeclare = this.pushDeclare.bind(this);
        this.pushAsign = this.pushAsign.bind(this);
        this.selectingArray = this.selectingArray.bind(this);
        this.pushIO = this.pushIO.bind(this);
    }

    toggleModals(type, input = "") {
        let code = this.props.code;
        switch (type) {
            case ComponentType.IF:
                if (input !== "") {
                    const flowCode = this.state.flowCode;
                    const prevEnd = flowCode[flowCode.length - 1];
                    const statement = `cond${this.state.count}=>condition: ${input}`;
                    const newStart = `${prevEnd.split("->")[0]}->cond${this.state.count}`;
                    const newEnd = `cond${this.state.count}(yes)->${
                        prevEnd.split("->")[1]
                        }`;
                    flowCode.pop();
                    flowCode.push(statement);
                    flowCode.push(newStart);
                    flowCode.push(`cond${this.state.count}(no)->end`);
                    flowCode.push(newEnd);
                    this.setState({
                        ...this.state,
                        flowCode
                    });
                }
                this.setState({
                    ...this.state,
                    isIfOpen: !this.state.isIfOpen,
                    count: this.state.count + 1
                });
                break;
            case ComponentType.DECLARE:
                if (input !== "") {
                    const flowCode = this.state.flowCode;
                    const prevEnd = flowCode[flowCode.length - 1];
                    const statement = `declare${this.state.count}=>operation: ${input}`;
                    const newEnd = `${prevEnd.split("->")[0]}->declare${
                        this.state.count
                        }`;
                    const newStart = `declare${this.state.count}->${
                        prevEnd.split("->")[1]
                        }`;
                    flowCode.pop();
                    flowCode.push(statement);
                    flowCode.push(newEnd);
                    flowCode.push(newStart);
                    code = `${code}\n${input};`;
                }
                this.setState({
                    ...this.state,
                    isDeclareOpen: !this.state.isDeclareOpen,
                    count: this.state.count + 1,
                    isSelectingArray: false,
                });
                this.props.addToCode(code);
                break;
            case ComponentType.ASIGN:
                if (input !== "") {
                    const flowCode = this.state.flowCode;
                    const flowCodeAux = [...flowCode];
                    const prevEnd = flowCode[flowCode.length - 1];
                    const statement = `asign${this.state.count}=>subroutine: ${input}`;
                    const newEnd = `${prevEnd.split("->")[0]}->asign${this.state.count}`;
                    const newStart = `asign${this.state.count}->${
                        prevEnd.split("->")[1]
                        }`;
                    flowCode.pop();
                    flowCode.push(statement);
                    flowCode.push(newEnd);
                    flowCode.push(newStart);
                    code = `${code}\n${input};`;
                }
                this.setState({
                    ...this.state,
                    isAsignOpen: !this.state.isAsignOpen,
                    count: this.state.count + 1,
                });
                this.props.addToCode(code);
                break;
            case ComponentType.OUTPUT:
                if (input !== "") {
                    const flowCode = this.state.flowCode;
                    const flowCodeAux = [...flowCode];
                    const prevEnd = flowCode[flowCode.length - 1];
                    const statement = `out${this.state.count}=>inputoutput: ${input}`;
                    const newEnd = `${prevEnd.split("->")[0]}->out${this.state.count}`;
                    const newStart = `out${this.state.count}->${
                        prevEnd.split("->")[1]
                        }`;
                    flowCode.pop();
                    flowCode.push(statement);
                    flowCode.push(newEnd);
                    flowCode.push(newStart);
                    code = `${code}\n${input};`;
                }
                this.setState({
                    ...this.state,
                    isIOOpen: !this.state.isIOOpen,
                    count: this.state.count + 1,
                });
                this.props.addToCode(code);
                break;
            case ComponentType.INPUT:
                if (input !== "") {
                    const flowCode = this.state.flowCode;
                    const flowCodeAux = [...flowCode];
                    const prevEnd = flowCode[flowCode.length - 1];
                    const statement = `in${this.state.count}=>inputoutput: ${input}`;
                    const newEnd = `${prevEnd.split("->")[0]}->in${this.state.count}`;
                    const newStart = `in${this.state.count}->${
                        prevEnd.split("->")[1]
                        }`;
                    flowCode.pop();
                    flowCode.push(statement);
                    flowCode.push(newEnd);
                    flowCode.push(newStart);
                    code = `${code}\n${input};`;
                }
                this.setState({
                    ...this.state,
                    isIOOpen: !this.state.isIOOpen,
                    count: this.state.count + 1,
                });
                this.props.addToCode(code);
                break;
        }
    }

    pushIf() {
        this.setState({
            ...this.state,
            isIfOpen: true
        });
    }

    pushDeclare() {
        this.setState({
            ...this.state,
            isDeclareOpen: true
        });
    }

    pushAsign() {
        this.setState({
            ...this.state,
            isAsignOpen: true
        });
    }

    selectingArray(value) {
        this.setState({
            ...this.state,
            isSelectingArray: value
        });
    }

    pushIO() {
        this.setState({
            ...this.state,
            isIOOpen: true
        });
    }

    pushToCode(id) {
        switch (id) {
            case ComponentType.IF:
                this.pushIf();
                break;
            case ComponentType.DECLARE:
                this.pushDeclare();
                break;
            case ComponentType.ASIGN:
                this.pushAsign();
                break;
            case ComponentType.ITERATION:
                break;
            case ComponentType.IO:
                this.pushIO();
                break;
        }
    }

    componentDidCatch(error, info) { }

    render() {
        return (
            <>
                <IfModal
                    isOpen={this.state.isIfOpen}
                    toggle={this.toggleModals}
                    tutorial={tutorial.IF}
                />
                <DeclareModal
                    isOpen={this.state.isDeclareOpen}
                    toggle={this.toggleModals}
                    tutorial={tutorial.DECLARE}
                    selectingArray={this.selectingArray}
                    isSelectingArray={this.state.isSelectingArray}
                />
                <AsignModal
                    isOpen={this.state.isAsignOpen}
                    toggle={this.toggleModals}
                    tutorial={tutorial.ASIGN}
                />
                <IOModal
                    isOpen={this.state.isIOOpen}
                    toggle={this.toggleModals}
                    tutorial={tutorial.IO} />
                <WorkspacePane
                    handler={this.pushToCode}
                    text={this.state.text}
                    code={this.state.flowCode}
                />
            </>
        );
    }
}

export default Workspace;
