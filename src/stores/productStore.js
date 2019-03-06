import { api, createStore } from "../services";

const loadProducts = () => {
  try {
    return JSON.parse(localStorage.getItem("__Edify__Products"));
  } catch (ex) {
    return [];
  }
};

const productStore = createStore(
  {
    products: loadProducts() || []
  },
  {
    fetchProducts: () => async (__, props) => {
      const products = await props.api.fetchProducts();
      return { products };
    }
  },
  //props
  {
    api
  },
  //selectors
  {
    getProductById: id => state => {
      return state.products.find(product => product.id === id);
    }
  }
);

productStore.subscribe(state => {
  localStorage.setItem("__Edify__Products", JSON.stringify(state.products));
});

export default productStore;
