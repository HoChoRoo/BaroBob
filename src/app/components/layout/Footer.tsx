"use client";
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoSection}>
            <Link href="/"></Link>
            <p className={styles.tagline}>스파로스 6기 점심시간 지킴이</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
