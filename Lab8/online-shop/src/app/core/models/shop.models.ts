export interface Category {
  id: number;
  name: string;
  slug: string;
  product_count?: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
  is_active: boolean;
  category: Category;
  image_url?: string;
  created_at: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderPayload {
  customer_name: string;
  customer_email: string;
  customer_address: string;
  items: Array<{ product_id: number; quantity: number }>;
}
