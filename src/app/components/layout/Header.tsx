"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoToOrderHistory = () => {
    router.push("/order-history");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>바로밥</span>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navList}>
            여러분들의 소중한 점심시간 [바로밥] 과 함께하세요
          </div>
        </nav>

        <div className={styles.action}>
          <button className={styles.promoButton} onClick={handleGoHome}>
            처음으로
          </button>
          <button
            className={styles.promoButton}
            onClick={handleGoToOrderHistory}
          >
            주문내역
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
