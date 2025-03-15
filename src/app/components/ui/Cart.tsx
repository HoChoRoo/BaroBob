"use client";

import React, { useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Button from "./Button";
import { useCart } from "../../hooks/useCart";

interface CartProps {
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCart = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleCheckout = () => {
    onCheckout();
  };

  return (
    <div
      className={`${styles.cartContainer} ${isExpanded ? styles.expanded : ""}`}
    >
      <div className={styles.cartHeader} onClick={toggleCart}>
        <div className={styles.cartSummary}>
          <span className={styles.cartTitle}>장바구니</span>
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </div>
        <span className={styles.totalPrice}>
          {totalPrice.toLocaleString()}원
        </span>
        <button className={styles.toggleBtn}>{isExpanded ? "▼" : "▲"}</button>
      </div>

      {isExpanded && (
        <div className={styles.cartContent}>
          {items.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>장바구니가 비어 있습니다.</p>
              <p>상품을 선택해 주세요.</p>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className={styles.cartFooter}>
                <div className={styles.cartActions}>
                  <Button variant="outlined" size="sm" onClick={clearCart}>
                    비우기
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleCheckout}
                    disabled={items.length === 0}
                  >
                    주문하기
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
