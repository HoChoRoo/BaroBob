"use client";

import React from "react";
import styles from "./CategoryTab.module.css";
import { Category } from "@/app/lib/types";

interface CategoryTabProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (categoryName: string) => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({
  categories,
  activeCategory,
  onSelect,
}) => {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabScroll}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.tab} ${
              activeCategory === category.name ? styles.active : ""
            }`}
            onClick={() => onSelect(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;
