import React, { useState, useContext, Component, memo } from "react";
import { cartStore } from "../../../stores";
import styles from "./product.module.css";

const CartContext = React.createContext();

const Product = props => {
  const { hasItem, addItem } = useContext(CartContext);
  const [isSelected, setSelected] = useState(hasItem(props.id));
  const addToCart = () => {
    setSelected(true);
    addItem(props.id);
  };
  return (
    <div className={styles.container}>
      <img src={props.cover} />
      <div className={styles.overlay}>
        <div>{props.title}</div>
        {!isSelected ? (
          <img
            onClick={addToCart}
            className={styles.add_icon}
            src="https://icongr.am/clarity/plus-circle.svg?size=25&color=ffffff"
          />
        ) : (
          <img
            className={styles.selected_icon}
            src="https://icongr.am/clarity/success-standard.svg?size=25&color=ffffff"
          />
        )}
      </div>
    </div>
  );
};

const MemoizedProduct = memo(Product);

class ProductContainer extends Component {
  state = {
    cartStoreState: cartStore
  };

  render() {
    return (
      <CartContext.Provider value={this.state.cartStoreState}>
        <MemoizedProduct {...this.props} />
      </CartContext.Provider>
    );
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = cartStore.subscribe(() => {
      this.setState({ cartStoreState: cartStore });
    });
  }
}

export default ProductContainer;
