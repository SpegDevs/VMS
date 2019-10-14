import React from "react";
import { ActionItem } from "./../ActionItem/ActionItem";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./Action.module.css";
import style from "./../Modals/Modal.module.css"
import axios from "axios";

const downloadFile = (code) => {
  download(code);
}

const download = (code) => {
  const element = document.createElement('a');;
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
  element.setAttribute('download', 'code.moe');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const sendToBack = async (value) => {
  const { data } = await axios.post("http://52.177.205.147:5000", { content: value })
  return data;
}

const names = [{
  icon: "play_arrow",
  action: sendToBack
}, {
  icon: "bug_report",
  action: "debug"
},
{
  icon: "stop",
  action: "stop"
}, {
  icon: "file_download",
  action: downloadFile,
}];



const initState = {
  isOpen: false,
  error: false,
  code: "",
  errorMsg: ""
}

export class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initState };
    this.modal = this.modal.bind(this);
    this.error = this.error.bind(this);
  }

  async modal() {
    const x = await sendToBack(this.props.code);
    let error, errorMsg, isOpen = false, code;
    if (x.error.trim() !== "") {
      error = true;
      errorMsg = x.error
    } else {
      isOpen = true;
      code = x.returnedCode;
    }
    this.setState({
      isOpen: isOpen,
      error: error,
      errorMsg: errorMsg,
      code: x.returnedCode
    })
  }

  toggle() {
    this.setState({
      isOpen: false,
      code: ""
    })
  }

  error() {
    this.setState({
      error: false,
      errorMsg: ""
    })
  }

  render() {
    return <>
      <Modal isOpen={this.state.isOpen} toggle={this.modal}>
        <ModalBody>{this.state.code}</ModalBody>
        <ModalFooter><Button className={style.sucess} onClick={() => {
          this.toggle();
        }}>Accept</Button></ModalFooter>
      </Modal>
      <Modal isOpen={this.state.error} toggle={this.error}>
        <ModalBody>{this.state.errorMsg}</ModalBody>
        <ModalFooter><Button className={style.sucess} onClick={() => {
          this.error();
        }}>Accept</Button></ModalFooter>
      </Modal>
      <ul>
        {names.map((item, index) => {
          if (item.action)
            return <ActionItem name={item.icon} modalToggle={this.modal} code={this.props.code} action={item.action} key={index} />;
        })}
      </ul>
    </>;
  }
}
