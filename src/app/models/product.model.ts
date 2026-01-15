export interface Seller {
  id: string;
  name: string;
  logo: string;
  price: number;
  availability: string;
  rating?: number;
  reviewCount?: number;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  lowestPrice: number;
  sellers: Seller[];
  sellerCount: number;
  rating?: number;
  reviewCount?: number;
}
