"use client";

import { CartItem } from "./types"; // 타입 임포트 경로는 프로젝트에 맞게 조정하세요

// API 기본 URL (환경에 맞게 수정)
const API_BASE_URL = "http://localhost:8080";

/**
 * 주문 내역을 가져오는 함수
 */
export async function fetchOrderHistory() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Order history fetch failed:", error);
    throw error;
  }
}

/**
 * 새로운 주문을 생성하는 함수
 */
export async function createOrder(
  teamName: string,
  memberCount: number,
  cartItems: CartItem[]
) {
  try {
    // 백엔드 API 형식에 맞게 데이터 구성
    const orderData = {
      teamName,
      memberCount,
      items: cartItems.map((item) => ({
        menuName: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      totalPrice: cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      ),
      orderDate: new Date().toISOString(),
    };

    console.log("Sending order data:", orderData);

    const response = await fetch(`${API_BASE_URL}/api/saveOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error("Order creation failed:", error);
    throw error;
  }
}
