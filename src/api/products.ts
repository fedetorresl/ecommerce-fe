import { getApi } from "./axios";
import { generateQueryKey } from "./config/config";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const getProductsQuery = () => ({
  queryKey: generateQueryKey("getProductsQuery", { domain: "product" }),
  queryFn: async () => {
    const response = await getApi().get<Product[]>("/products");
    return response.data;
  },
});
