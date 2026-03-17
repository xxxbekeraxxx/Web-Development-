export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;          // in KZT
  rating: number;         // 1..5
  likes: number;          // количество лайков
  image: string;          // main product image
  images: string[];       // additional images (at least 3)
  link: string;           // kaspi.kz product page
  categoryId: number;     // category identifier
}
