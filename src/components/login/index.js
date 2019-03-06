import React, { useState } from "react";
import styles from "./login.module.css";
import { Textfield, Button } from "../common";
import { authStore, userStore } from "../../stores";

const Login = props => {
  const [form, setValues] = useState({
    emailAddress: ""
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
            await authStore.authenticate();
            userStore.setUser({
              username: "John D",
              emailAddress: form.emailAddress
            });
            props.history.push("/");
          }}
          className={styles.form}>
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
              required
              placeholder="Password"
            />
          </div>
          <Button type="submit" styles={styles.submit}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
