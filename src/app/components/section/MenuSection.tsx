"use client";

import React, { useEffect, useState } from "react";
import styles from "./MenuSection.module.css";
import MenuCard from "../ui/MenuCard";
import { MENU_ITEMS } from "@/app/lib/constants";
import { MenuItem } from "@/app/lib/types";

interface MenuSectionProps {
  activeCategory?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  activeCategory = "정식류",
}) => {
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Filter menu items based on active category
    const items =
      activeCategory === "전체"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((item) => item.category === activeCategory);

    setFilteredItems(items);
  }, [activeCategory]);

  return (
    <section className={styles.menuSection}>
      <div className={styles.menuGrid}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <MenuCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
