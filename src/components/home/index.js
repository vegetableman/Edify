import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import ProductList from "../product/list";
import Cart from "../cart";
import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
