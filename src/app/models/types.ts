export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  parentId?: number;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  description: string;
  logo: string;
  image: string;
  country: string;
}