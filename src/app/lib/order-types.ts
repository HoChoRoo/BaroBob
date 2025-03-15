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
