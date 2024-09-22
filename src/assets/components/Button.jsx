import React from "react";
import styles from "../components/Button.module.css";

function Button({ btnProp }) {
  return <button onClick={btnProp.onClick}>{btnProp.label}</button>;
}

export default Button;
