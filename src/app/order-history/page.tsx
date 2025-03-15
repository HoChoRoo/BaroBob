"use client";

import React, { useEffect, useState } from "react";
import { fetchOrderHistory } from "@/app/lib/api";
import { Order } from "@/app/lib/order-types";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import styles from "./page.module.css";
import { useRouter } from "next/router";

export default function OrderHistoryPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadOrders() {
      try {
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
  }, []);

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
