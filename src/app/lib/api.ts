"use client";

import { Order } from "./order-types";

// 더미 데이터 생성
const DUMMY_ORDERS: Order[] = [
  {
    id: "order-001",
    teamName: "프론트엔드팀",
    memberCount: 3,
    items: [
      { menuName: "김치우동정식", price: 10000, quantity: 1 },
      { menuName: "돈까스정식", price: 8900, quantity: 2 },
    ],
    totalPrice: 27800,
    orderDate: "2025-03-15T12:00:00",
  },
  {
    id: "order-002",
    teamName: "백엔드팀",
    memberCount: 4,
    items: [
      { menuName: "가츠나베정식", price: 10000, quantity: 2 },
      { menuName: "김치치즈가츠나베", price: 12500, quantity: 2 },
    ],
    totalPrice: 45000,
    orderDate: "2025-03-15T12:15:00",
  },
  {
    id: "order-003",
    teamName: "디자인팀",
    memberCount: 2,
    items: [
      { menuName: "해물오뎅우동정식", price: 13000, quantity: 1 },
      { menuName: "냉모밀돈까스", price: 12500, quantity: 1 },
    ],
    totalPrice: 25500,
    orderDate: "2025-03-15T12:30:00",
  },
  {
    id: "order-004",
    teamName: "기획팀",
    memberCount: 5,
    items: [
      { menuName: "안심까스정식", price: 11500, quantity: 3 },
      { menuName: "김치가츠동", price: 9000, quantity: 2 },
    ],
    totalPrice: 52500,
    orderDate: "2025-03-15T12:45:00",
  },
];

// 주문 내역을 가져오는 API 함수
export async function fetchOrderHistory(): Promise<Order[]> {
  // 실제로는 백엔드 API를 호출하지만, 지금은 더미 데이터 사용
  // return fetch('/api/orders').then(res => res.json());

  // 백엔드 API 호출을 시뮬레이션하기 위한 지연
  await new Promise((resolve) => setTimeout(resolve, 800));

  return DUMMY_ORDERS;
}
