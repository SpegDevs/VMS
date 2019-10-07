import React from "react";
import styles from "./Ide.module.css";
import { Action } from "./../components/Action/Action";
import { SideTools } from "./../components/SideTools/SideTools";
import Workspace from "./../components/Workspace/Workspace";
import { DndProvider } from "react-dnd";

const initState = {
  moeCode: ""
}

export class Ide extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...initState };
    this.addToCode = this.addToCode.bind(this);
  }

  addToCode(value) {
    this.setState({
      moeCode: value
    });
  }

  render() {
    return (
      <>
        <main>
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <img src="vms.png" alt="VMS logo" />
            </div>
            <div className={styles.tools}>
              <SideTools />
            </div>
          </div>
          <div className={styles.env}>
            <div className={styles.actions}>
              <Action code={this.state.moeCode} />
            </div>
            <div className={styles.workspace}>
              <DndProvider>
                <Workspace addToCode={this.addToCode} code={this.state.moeCode} />
              </DndProvider>
            </div>
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
};
