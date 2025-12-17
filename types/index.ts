export type Category = 'all' | 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'drink';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  reviews: number;
  isFeatured: boolean;
  isSpecial?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
