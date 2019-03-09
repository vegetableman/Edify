import React, { Component } from "react";
import styles from "./header.module.css";
import { userStore, cartStore, authStore } from "../../stores";
import { Link } from "react-router-dom";
import _ from "lodash";

const UserContext = React.createContext();
const CartContext = React.createContext();

const LogoutButton = () => {
  return (
    <img
      onClick={authStore.signout}
      className={styles.logout}
      title="logout"
      src="https://icongr.am/clarity/logout.svg?size=22"
    />
  );
};

const UserInfo = () => (
  <UserContext.Consumer>
    {({ info }) => {
      return (
        <div className={styles.user_info}>
          {_.get(info, "username", "John D")} [{_.get(info, "emailAddress")}]
        </div>
      );
    }}
  </UserContext.Consumer>
);

const CartInfo = props => (
  <CartContext.Consumer>
    {({ getCount }) => (
      <Link
        to="/cart"
        onMouseOver={() => {
          import("../cart");
        }}>
        <div className={styles.cart_info}>
          <span>Cart</span>{" "}
          <span className={styles.cart_count}>{getCount()}</span>
        </div>
      </Link>
    )}
  </CartContext.Consumer>
);

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>Edify</div>
      <div className={styles.panel}>
        <UserInfo />
        <CartInfo />
        <LogoutButton />
      </div>
    </header>
  );
};

class HeaderContainer extends Component {
  state = {
    userState: userStore.state,
    cartStoreState: cartStore
  };

  render() {
    const { userState, cartStoreState } = this.state;
    return (
      <UserContext.Provider value={{ ...userState }}>
        <CartContext.Provider value={{ ...cartStoreState }}>
          <Header />
        </CartContext.Provider>
      </UserContext.Provider>
    );
  }

  componentWillUnmount() {
    this.unSubscribeUser && this.unSubscribeUser();
    this.unSubscribeCart && this.unSubscribeCart();
  }

  componentDidMount() {
    this.unSubscribeUser = userStore.subscribe(state => {
      this.setState({ userState: state });
    });
    this.unSubscribeCart = cartStore.subscribe(() => {
      this.setState({ cartStoreState: cartStore });
    });
  }
}

export default HeaderContainer;
