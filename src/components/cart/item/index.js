import React from "react";
import { productStore } from "../../../stores";
import { Button } from "../../common";
import styles from "./cart-item.module.css";

const CartItem = ({ id, onRemove, onAdd, getCount, onRemoveOneItem }) => {
  const product = productStore.getProductById(id);
  return (
    <li className={styles.container}>
      <div className={styles.left}>
        <img src={product.cover} className={styles.cover} />
        <div className={styles.title}>{product.title}</div>
      </div>
      <div className={styles.edit_controls}>
        <img
          src="https://icongr.am/clarity/minus-circle.svg?color=ffffff&size=20"
          className={styles.decrement_icon}
          onClick={onRemoveOneItem}
        />
        <div>{getCount(id)}</div>
        <img
          src="https://icongr.am/clarity/plus-circle.svg?color=ffffff&size=20"
          className={styles.increment_icon}
          onClick={onAdd}
        />
      </div>
      <Button variant="empty" onClick={onRemove}>
        Remove
      </Button>
    </li>
  );
};

export default CartItem;
