import React, { Component, useContext } from "react";
import _ from "lodash";
import Product from "./item";
import { productStore } from "../../stores";
import styles from "./product-list.module.css";

const ProductContext = React.createContext();

const ProductList = () => {
  const state = useContext(ProductContext);
  return (
    <div className={styles.container}>
      {_.map(state.products, product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

class ProductListContainer extends Component {
  state = {
    productState: productStore.state
  };

  render() {
    return (
      <ProductContext.Provider value={{ ...this.state.productState }}>
        <ProductList />
      </ProductContext.Provider>
    );
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = productStore.subscribe(state => {
      this.setState({ productState: state });
    });
    productStore.fetchProducts();
  }
}

export default ProductListContainer;
