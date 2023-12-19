import { useQuery } from "@tanstack/react-query";
import { Product, getProductsQuery } from "../api/products";
import { errorToast } from "../utils";
import { ProductCard } from "../components";

export function Main() {
  const queryParam = {
    ...getProductsQuery(),
    onError: errorToast,
  };
  const { data: products, error, isPending } = useQuery(queryParam);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="bg-white">
      <div className="mx-auto md:max-w-2xl px-20 py-2 sm:px-6 sm:py-6 lg:max-w-6xl lg:px-16">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
