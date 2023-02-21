import React from "react";
import style from "./Button.module.css";

function Button(props) {
  const buttonStyle = props.className ? `${props.className} ${style.button}` : style.button
  return (
    <button
      onClick={props.onClick}
      className={buttonStyle}
      type={props.type}
      form={props.form}
    >
      {props.title}
    </button>
  );
}

export default React.memo(Button);
