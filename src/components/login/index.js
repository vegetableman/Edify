import React, { useState } from "react";
import styles from "./login.module.css";
import { Textfield, Button } from "../common";
import { authStore } from "../../stores";
import { Link } from "react-router-dom";

const Login = props => {
  const [form, setValues] = useState({
    emailAddress: "",
    password: "",
    err: false
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
            const result = await authStore.authenticate(
              form.emailAddress,
              form.password
            );
            if (result.isAuthenticated) {
              props.history.push("/");
            } else {
              setValues({
                ...form,
                err: true
              });
            }
          }}
          className={styles.form}>
          {form.err && (
            <div className={styles.formerrgroup}>
              Invalid Email ID/ Password
            </div>
          )}
          <div className={styles.formgroup}>
            <Textfield
              styles={styles.textfield}
              aria-label="email"
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
              aria-label="password"
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={updateField}
            />
          </div>
          <Button type="submit" styles={styles.submit}>
            Login
          </Button>
          <div className={styles.formgroup} />
        </form>
        <div className={styles.register_footer}>
          <Link to="/register" className={styles.register_link}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
