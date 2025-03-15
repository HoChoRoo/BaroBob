"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartProvider, useCart } from "@/app/hooks/useCart";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import MenuSection from "@/app/components/section/MenuSection";
import CategorySection from "@/app/components/section/CategorySection";
import Cart from "@/app/components/ui/Cart";
import { createOrder } from "@/app/lib/api";
import styles from "./page.module.css";
import { CATEGORIES } from "../lib/constants";

// 내부 컴포넌트로 분리
function OrderPageContent() {
  const router = useRouter();
  const { items: cartItems, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
  const [team, setTeam] = useState<string>("");
  const [memberCount, setMemberCount] = useState<number>(0);

  // 세션 스토리지에서 주문 정보 가져오기
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTeam = sessionStorage.getItem("orderTeam");
      const storedMembers = sessionStorage.getItem("orderMembers");

      // 팀 정보나 인원수 정보가 없으면 홈페이지로 리다이렉트
      if (!storedTeam || !storedMembers) {
        router.replace("/");
        return;
      }

      setTeam(storedTeam);
      setMemberCount(parseInt(storedMembers, 10));
    }
  }, [router]);

  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleCheckout = async () => {
    console.log("Checkout initiated, items:", cartItems);
    console.log("Items length:", cartItems.length);

    if (cartItems.length === 0) {
      alert("장바구니가 비어 있습니다. 메뉴를 선택해주세요.");
      return;
    }

    setIsCheckingOut(true);

    try {
      // 백엔드 API 호출
      await createOrder(team, memberCount, cartItems);

      // 주문 완료 후 장바구니 비우기
      clearCart();

      // 주문 완료 표시를 세션 스토리지에 저장 (주문 내역 페이지 접근용)
      sessionStorage.setItem("completedOrder", "true");

      // 주문 완료 후 팀 정보와 인원수 표시
      let successMessage = "주문이 완료되었습니다.";
      if (team && memberCount > 0) {
        successMessage = `${team} ${memberCount}명의 주문이 완료되었습니다!`;
      }

      alert(successMessage);

      // 주문 내역 페이지로 이동
      router.push("/order-history");
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
        {team && memberCount > 0 && (
          <div className={styles.infoBanner}>
            <div className={styles.infoContainer}>
              <div className={styles.infoContent}>
                {team} - {memberCount}명
              </div>
            </div>
          </div>
        )}

        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        <MenuSection activeCategory={activeCategory} />
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
}

// 메인 OrderPage 컴포넌트
export default function OrderPage() {
  return (
    <CartProvider>
      <OrderPageContent />
    </CartProvider>
  );
}
