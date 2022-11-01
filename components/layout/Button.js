import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={` ${classes.button} ${classes[props.color]}`}
      onClick={props.onClickHandler}
    >
      {props.msg}
    </button>
  );
};

export default Button;
