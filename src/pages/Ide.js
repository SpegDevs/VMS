import React from "react";
import styles from "./Ide.module.css";
import { Action } from "./../components/Action/Action";
import { SideTools } from "./../components/SideTools/SideTools";
import Workspace from "./../components/Workspace/Workspace";
import { DndProvider } from "react-dnd";

export const Ide = () => {
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
            <Action />
          </div>
          <div className={styles.workspace}>
            <DndProvider>
              <Workspace />
            </DndProvider>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};
