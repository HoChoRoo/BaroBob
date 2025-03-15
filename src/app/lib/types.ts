export interface Category {
  id: number;
  name: string;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
