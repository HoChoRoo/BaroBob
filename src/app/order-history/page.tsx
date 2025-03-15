"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchOrderHistory, deleteOrder } from "@/app/lib/api";
import { Order } from "@/app/lib/order-types";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import styles from "./page.module.css";

export default function OrderHistoryPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    async function loadOrders() {
      try {
        // 권한 체크 (예: 로그인 상태 확인 또는 세션 스토리지에 데이터가 있는지)
        const hasAccess =
          sessionStorage.getItem("orderTeam") ||
          sessionStorage.getItem("completedOrder");

        if (!hasAccess) {
          // 접근 권한이 없으면 홈페이지로 리다이렉트
          router.replace("/");
          return;
        }

        setIsLoading(true);
        const data = await fetchOrderHistory();
        setOrders(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch order history:", err);
        setError("주문 내역을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    }

    loadOrders();
  }, [router]);

  const handleDeleteOrder = async (orderId: string) => {
    // 삭제 확인
    if (!window.confirm("정말로 이 주문을 삭제하시겠습니까?")) {
      return;
    }

    try {
      setIsDeleting(true);
      await deleteOrder(orderId);

      // 주문 목록에서 삭제된 주문 제거
      setOrders(orders.filter((order) => order.id !== orderId));

      alert("주문이 성공적으로 삭제되었습니다.");
    } catch (error) {
      console.error("Failed to delete order:", error);
      alert("주문 삭제 중 오류가 발생했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>오늘의 주문 내역</h1>
          <p className={styles.date}>
            {new Date().toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {isLoading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>주문 내역을 불러오는 중...</p>
          </div>
        ) : error ? (
          <div className={styles.error}>
            <p>{error}</p>
            <button
              className={styles.retryButton}
              onClick={() => fetchOrderHistory().then(setOrders)}
            >
              다시 시도
            </button>
          </div>
        ) : (
          <div className={styles.orderList}>
            {orders.length === 0 ? (
              <div className={styles.emptyState}>
                <p>오늘 등록된 주문이 없습니다.</p>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className={styles.orderCard}>
                  <div className={styles.orderHeader}>
                    <h2 className={styles.teamName}>{order.teamName}</h2>
                    <span className={styles.memberCount}>
                      인원 {order.memberCount}명
                    </span>
                  </div>

                  <div className={styles.orderItems}>
                    {order.items.map((item, index) => (
                      <div key={index} className={styles.orderItem}>
                        <span className={styles.menuName}>{item.menuName}</span>
                        <span className={styles.quantity}>
                          {item.quantity}개
                        </span>
                        <span className={styles.price}>
                          {item.price.toLocaleString()}원
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.orderFooter}>
                    <span className={styles.orderTime}>
                      {new Date(order.orderDate).toLocaleTimeString("ko-KR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className={styles.totalPrice}>
                      총 금액:{" "}
                      <strong>{order.totalPrice.toLocaleString()}원</strong>
                    </span>
                  </div>

                  <div className={styles.orderActions}>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDeleteOrder(order.id)}
                      disabled={isDeleting}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
