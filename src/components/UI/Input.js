import classes from "./Input.module.css";
import React from "react";

//how to add refs to custom component
const Input = React.forwardRef((props, ref) => {
  //spread operator adds all properties to input from props
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
