import React, { useState } from "react";
import styles from "./register.module.css";
import { Textfield, Button } from "../common";
import { authStore, userStore } from "../../stores";

const Register = props => {
  const [form, setValues] = useState({
    userName: "",
    emailAddress: "",
    password: ""
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Edify</div>
      <div className={styles.container}>
        <form
          onSubmit={async e => {
            e.preventDefault();
            await authStore.register(form.emailAddress, form.password);
            userStore.setUser({
              username: form.userName,
              emailAddress: form.emailAddress
            });
            props.history.push("/");
          }}
          className={styles.form}>
          <div className={styles.formgroup}>
            <Textfield
              styles={styles.textfield}
              type="text"
              name="userName"
              required
              placeholder="User Name"
              onChange={updateField}
            />
          </div>
          <div className={styles.formgroup}>
            <Textfield
              styles={styles.textfield}
              type="email"
              name="emailAddress"
              required
              placeholder="Email address"
              onChange={updateField}
            />
          </div>
          <div className={styles.formgroup}>
            <Textfield
              styles={styles.textfield}
              type="password"
              name="password"
              required
              placeholder="Enter Password"
              onChange={updateField}
            />
          </div>
          <Button type="submit" styles={styles.submit}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
