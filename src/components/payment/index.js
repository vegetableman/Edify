import React from "react";
import styles from "./payment.module.css";

const Payment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.msg_container}>
        <img src="https://icongr.am/clarity/success-standard.svg" />
        <div className={styles.message}>Payment Successful</div>
      </div>
    </div>
  );
};

export default Payment;
