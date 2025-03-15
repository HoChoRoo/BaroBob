"use client";

import React from "react";
import Image from "next/image";
import styles from "./MenuCard.module.css";
import { MenuItem } from "@/app/lib/types";
import { useCart } from "@/app/hooks/useCart";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <div className={styles.card} onClick={handleAddToCart}>
      <div className={styles.imageContainer}>
        {item.imageUrl && (
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={180}
            height={180}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>{item.price.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default MenuCard;
