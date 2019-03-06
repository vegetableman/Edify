import React, { Component, useContext } from "react";
import _ from "lodash";
import { cartStore } from "../../stores";
import { Button } from "../common";
import CartItem from "./item";
import styles from "./cart.module.css";

const CartContext = React.createContext();

const Cart = props => {
  const { itemIds } = useContext(CartContext);
  const onRemove = id => () => cartStore.removeItem(id);
  const onAdd = id => () => cartStore.addItem(id);
  const onCheckout = () => props.history.push("/payment");
  const getItemCount = id => cartStore.getItemCount(id);
  const onRemoveOneItem = id => () => cartStore.removeOneItem(id);
  const uniqueIds = _.uniq(itemIds).sort();
  return (
    <div className={styles.container}>
      <ul className={styles.item_list}>
        {_.map(uniqueIds, id => (
          <CartItem
            id={id}
            key={"cart-item-" + id}
            onRemove={onRemove(id)}
            onRemoveOneItem={onRemoveOneItem(id)}
            onAdd={onAdd(id)}
            getCount={getItemCount}
          />
        ))}
      </ul>
      {!_.isEmpty(itemIds) && (
        <Button variant="big" styles={styles.checkout_btn} onClick={onCheckout}>
          Checkout
        </Button>
      )}
    </div>
  );
};

class CartContainer extends Component {
  state = {
    cartState: cartStore.state
  };

  render() {
    return (
      <CartContext.Provider value={this.state.cartState}>
        <Cart {...this.props} />
      </CartContext.Provider>
    );
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = cartStore.subscribe(state => {
      this.setState({ cartState: state });
    });
  }
}

export default CartContainer;
