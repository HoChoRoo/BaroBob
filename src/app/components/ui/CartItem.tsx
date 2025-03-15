"use client";

import React from "react";
import Image from "next/image";
import styles from "./CartItem.module.css";
import { CartItem as CartItemType } from "@/app/lib/types";
import { useCart } from "@/app/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        {item.imageUrl && (
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={60}
            height={60}
            className={styles.image}
          />
        )}
      </div>

      <div className={styles.details}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.price}>
          {(item.price * item.quantity).toLocaleString()}원
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button className={styles.quantityBtn} onClick={handleDecrement}>
            -
          </button>
          <span>{item.quantity}</span>
          <button className={styles.quantityBtn} onClick={handleIncrement}>
            +
          </button>
        </div>
        <button
          className={styles.removeBtn}
          onClick={() => removeItem(item.id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default CartItem;
