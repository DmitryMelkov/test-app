export interface Order {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
}

export const orders: Order[] = [
  { id: 1, userId: 1, productId: 1, quantity: 1 },
  { id: 2, userId: 2, productId: 2, quantity: 2 },
  { id: 3, userId: 3, productId: 3, quantity: 1 },
  { id: 4, userId: 4, productId: 4, quantity: 1 },
  { id: 5, userId: 5, productId: 5, quantity: 3 },
  { id: 6, userId: 6, productId: 6, quantity: 1 },
  { id: 7, userId: 7, productId: 7, quantity: 2 },
  { id: 8, userId: 8, productId: 8, quantity: 1 },
  { id: 9, userId: 9, productId: 9, quantity: 1 },
  { id: 10, userId: 10, productId: 10, quantity: 4 },
  { id: 11, userId: 11, productId: 11, quantity: 1 },
  { id: 12, userId: 12, productId: 12, quantity: 2 },
  { id: 13, userId: 13, productId: 13, quantity: 5 },
  { id: 14, userId: 14, productId: 14, quantity: 1 },
  { id: 15, userId: 15, productId: 15, quantity: 1 },
  { id: 16, userId: 16, productId: 1, quantity: 1 },
  { id: 17, userId: 17, productId: 3, quantity: 2 },
  { id: 18, userId: 18, productId: 5, quantity: 1 },
  { id: 19, userId: 19, productId: 7, quantity: 3 },
  { id: 20, userId: 20, productId: 9, quantity: 1 },
  { id: 21, userId: 1, productId: 11, quantity: 2 },
  { id: 22, userId: 3, productId: 13, quantity: 1 },
  { id: 23, userId: 5, productId: 2, quantity: 3 },
  { id: 24, userId: 7, productId: 4, quantity: 1 },
  { id: 25, userId: 9, productId: 6, quantity: 2 },
];
