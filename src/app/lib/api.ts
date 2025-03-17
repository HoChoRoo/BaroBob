"use client";

import { Order, OrderRequest } from "./order-types";
import { CartItem } from "./types";

// API 기본 URL (환경에 맞게 수정)
const API_BASE_URL = "http://10.10.10.218:8080";

/**
 * 주문 내역을 가져오는 함수
 */
export async function fetchOrderHistory(): Promise<Order[]> {
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
 * 백엔드 API 구조에 맞게 변환하여 전송
 */
export async function createOrder(
  teamName: string,
  memberCount: number,
  cartItems: CartItem[]
): Promise<string> {
  try {
    // 동일한 메뉴 이름을 가진 아이템들을 수량 기준으로 합치기
    const menuMap = new Map<
      string,
      { menuName: string; price: number; quantity: number }
    >();

    cartItems.forEach((item) => {
      const menuName = item.name;
      if (menuMap.has(menuName)) {
        // 이미 같은 메뉴가 맵에 있으면 수량만 증가
        const existingItem = menuMap.get(menuName)!;
        existingItem.quantity += item.quantity;
      } else {
        // 새 메뉴이면 맵에 추가
        menuMap.set(menuName, {
          menuName: item.name,
          price: item.price,
          quantity: item.quantity,
        });
      }
    });

    // 맵에서 다시 배열로 변환
    const orderItems = Array.from(menuMap.values());

    // 총 가격 계산
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // 백엔드에 전송할 데이터 구성
    const requestData: OrderRequest = {
      teamName,
      memberCount,
      items: orderItems,
      totalPrice,
    };

    console.log(
      "Sending order to backend:",
      JSON.stringify(requestData, null, 2)
    );

    const response = await fetch(`${API_BASE_URL}/api/saveOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
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

/**
 * 주문을 삭제하는 함수
 */
export async function deleteOrder(orderId: string): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error("Order deletion failed:", error);
    throw error;
  }
}
