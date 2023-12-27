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

export const getProductsQuery = (searchTerm?: string) => ({
  queryKey: ["getProductsQuery", searchTerm],
  queryFn: async ({ pageParam = 1 }) => {
    const query = searchTerm
      ? `/products/search?q=${encodeURIComponent(
          searchTerm
        )}&limit=6&skip=${pageParam}&select=${attributes}`
      : `/products?limit=6&skip=${pageParam}&select=${attributes}`;

    const response = await getApi().get<ProductsResponse>(query);

    return response.data;
  },
  initialPageParam: 0,
});
