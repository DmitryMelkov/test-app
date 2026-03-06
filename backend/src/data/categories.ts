export interface Category {
  id: number;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Electronics', icon: 'laptop' },
  { id: 2, name: 'Accessories', icon: 'mouse' },
  { id: 3, name: 'Peripherals', icon: 'keyboard' },
  { id: 4, name: 'Mobile', icon: 'smartphone' },
];
