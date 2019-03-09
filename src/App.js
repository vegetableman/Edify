import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { authStore } from "./stores";
import { routes } from "./services";
import Login from "./components/login";

const { PublicRoute, PrivateRoute } = routes;
const LoadingMessage = () => "Loading...";
const lazyImport = filename => lazy(() => import(`${filename}`));

class App extends Component {
  state = {
    isAuthenticated: authStore.getIsAuthenticated()
  };

  render() {
    return (
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute
            exact
            path="/register"
            component={lazyImport("./components/register")}
          />
          <PrivateRoute
            exact
            path="/payment"
            component={lazyImport("./components/payment")}
          />
          <PrivateRoute path="/" component={lazyImport("./components/home")} />
        </Switch>
      </Suspense>
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
