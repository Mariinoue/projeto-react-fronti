export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: string;
}
