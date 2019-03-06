import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { authStore } from "./stores";
import { Login, Home, Payment } from "./components";

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

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/payment" component={Payment} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
