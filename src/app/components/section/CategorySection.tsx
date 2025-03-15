"use client";

import React from "react";
import styles from "./CategorySection.module.css";
import { CATEGORIES } from "@/app/lib/constants";

interface CategorySectionProps {
  activeCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryList}>
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryItem} ${
              activeCategory === category.name ? styles.active : ""
            }`}
            onClick={() => onSelectCategory(category.name)}
          >
            <div className={styles.categoryContent}>
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
