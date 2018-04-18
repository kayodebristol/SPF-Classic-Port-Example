import *  as React from "react";

import styles from "./../styles/ClassicExample.module.scss";
import { IWarningWindowComponentProps } from "../interfaces/IWarningWindowComponentProps";

export default class WarningWindowComponent extends React.Component<any, IWarningWindowComponentProps> {
  render(): any {
    return (
      <div className={styles.topBar}>
        <h2>{this.props.isAdmin ? "You are an Admin on this site!" : "You are not an Admin on this site!"}</h2>
      </div>
    );
  }
}