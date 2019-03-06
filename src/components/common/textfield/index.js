import React from "react";
import styles from "./textfield.module.css";
import cx from "classnames";

const Textfield = props => {
  return (
    <input
      type="text"
      className={cx(styles.base, { [props.styles]: Boolean(props.styles) })}
      {...props}
    />
  );
};

export default Textfield;
