import React from "react";
import styles from "./button.module.css";
import cx from "classnames";

const getBase = variant => {
  switch (variant) {
    case "empty":
      return styles.empty;
    case "big":
      return styles.big;
    default:
      return styles.base;
  }
};

const Button = props => {
  return (
    <button
      className={cx(getBase(props.variant), {
        [props.styles]: Boolean(props.styles)
      })}
      {...props}
    />
  );
};

export default Button;
