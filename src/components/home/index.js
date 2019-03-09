import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { PageLoader } from "../common";
import Header from "../header";
import Footer from "../footer";
import ProductList from "../product/list";
import styles from "./home.module.css";

const LazyCart = lazy(() => import("../cart"));

const Home = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/cart" component={PageLoader(LazyCart)} />
          </Switch>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
