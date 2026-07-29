export interface Product {
  id: string;

  name: string;
  category: string;
  subcategory: string | null;
  description: string | null;

  price: number;

  image_url: string | null;

  is_available: boolean;
  is_featured: boolean;
  is_sugar_free: boolean;

  sku: string | null;
  ingredients: string | null;

  is_veg: boolean;

  calories: number | null;

  stock: number;

  display_order: number;

  created_at: string;
  updated_at: string;
}