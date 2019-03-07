import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { authStore } from "./stores";
import { Login, Home, Payment, Register } from "./components";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authStore.getIsAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function LoginRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !authStore.getIsAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  state = {
    isAuthenticated: authStore.getIsAuthenticated()
  };

  render() {
    return (
      <Switch>
        <LoginRoute exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/payment" component={Payment} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    );
  }

  componentDidMount() {
    authStore.subscribe(state => {
      this.setState({
        isAuthenticated: state.isAuthenticated
      });
    });
  }
}

export default App;
