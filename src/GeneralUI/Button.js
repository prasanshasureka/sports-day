import React from "react";
import style from "./Button.module.css";

function Button(props) {
  const classProp = props.className;
  return (
    <button
      onClick={props.onClick}
      className={`${style.button} ${classProp}`}
      type={props.type}
      form={props.form}
    >
      {props.title}
    </button>
  );
}

export default React.memo(Button);
