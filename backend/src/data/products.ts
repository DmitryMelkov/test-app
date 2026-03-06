export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
}

export const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1200, categoryId: 1 },
  { id: 2, name: 'Mouse', price: 25, categoryId: 2 },
  { id: 3, name: 'Keyboard', price: 75, categoryId: 3 },
  { id: 4, name: 'Monitor', price: 300, categoryId: 3 },
  { id: 5, name: 'Headphones', price: 150, categoryId: 2 },
  { id: 6, name: 'Tablet', price: 500, categoryId: 4 },
  { id: 7, name: 'Smartphone', price: 800, categoryId: 4 },
  { id: 8, name: 'Printer', price: 200, categoryId: 3 },
  { id: 9, name: 'Router', price: 100, categoryId: 3 },
  { id: 10, name: 'Webcam', price: 50, categoryId: 2 },
  { id: 11, name: 'Microphone', price: 80, categoryId: 2 },
  { id: 12, name: 'External Hard Drive', price: 120, categoryId: 2 },
  { id: 13, name: 'USB Flash Drive', price: 20, categoryId: 2 },
  { id: 14, name: 'Graphics Card', price: 600, categoryId: 1 },
  { id: 15, name: 'Power Supply', price: 90, categoryId: 1 },
];
