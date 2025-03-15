// 주문 정보 인터페이스
export interface OrderItem {
  menuName: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  teamName: string;
  memberCount: number;
  items: OrderItem[];
  totalPrice: number;
  orderDate: string;
}

// 백엔드로 보낼 주문 데이터 타입
export interface OrderRequest {
  teamName: string;
  memberCount: number;
  items: OrderItem[];
  totalPrice: number;
}
