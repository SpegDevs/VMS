import React from "react";
import { ActionItem } from "./../ActionItem/ActionItem";
import "./Action.module.css";

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

const names = [{
  icon: "play_arrow",
  action: "play"
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

export class Action extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {names.map((item, index) => {
          if (item.action)
            return <ActionItem name={item.icon} code={this.props.code} action={item.action} key={index} />;
        })}
      </ul>
    );
  }
}
