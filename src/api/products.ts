import { getApi } from "./axios";

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const attributes = "id,title,description,price,thumbnail";

export const getProductsQuery = () => ({
  queryKey: ["getProductsQuery"],
  queryFn: async ({ pageParam = 1 }) => {
    const response = await getApi().get<ProductsResponse>(
      `/products?limit=6&skip=${pageParam}&select=${attributes}`
    );
    return response.data;
  },
  initialPageParam: 0,
});
