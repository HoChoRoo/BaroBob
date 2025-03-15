import React, { useState } from "react";
import { NextPage } from "next";
import Header from "./components/layout/Header";
import Cart from "./components/ui/Cart";
import { useCart } from "./hooks/useCart";
import styles from "../styles/Home.module.css";
import CategorySection from "./components/section/CategorySection";
import MenuSection from "./components/section/MenuSection";
import Footer from "./components/layout/Footer";

const Home: NextPage = () => {
  const { items, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [activeCategory, setActiveCategory] = useState("signature");

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setIsCheckingOut(true);

    try {
      // In a real application, this would be an API call
      console.log("Sending order to API:", items);

      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert(`주문이 완료되었습니다. 총액: ${totalPrice.toLocaleString()}원`);

      // Here you could redirect to a confirmation page
      // router.push('/order-confirmation');
    } catch (error) {
      console.error("Checkout error:", error);
      alert("주문 처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.heroSection}>
          {/* <img
            src="/images/hero-bg.jpg"
            alt="theVenti Coffee"
            className={styles.heroBg}
          /> */}
        </div>

        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.active}`}>신메뉴</button>
            <button className={styles.tab}>전체메뉴</button>
            <button className={styles.tab}>시그니처</button>
          </div>
        </div>

        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        <MenuSection />
      </main>

      <Footer />

      <Cart onCheckout={handleCheckout} />

      {isCheckingOut && (
        <div className={styles.loadingOverlay}>
          <div className={styles.spinner}></div>
          <p>주문 처리 중...</p>
        </div>
      )}
    </div>
  );
};

export default Home;
