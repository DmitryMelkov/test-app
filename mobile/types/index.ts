export interface Order {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}
