import { useQuery } from "@tanstack/react-query";
import { getProductsQuery } from "../api/products";
import { errorToast } from "../utils";
import { icons } from "../components";

export function Main() {
  const queryParam = {
    ...getProductsQuery(),
    onError: errorToast,
  };
  const { data: products, error, isPending } = useQuery(queryParam);

  console.log(products);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="bg-white">
      <div className="mx-auto md:max-w-2xl px-20 py-2 sm:px-6 sm:py-6 lg:max-w-6xl lg:px-16">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col items-center justify-between gap-y-2 h-[27.5rem]"
            >
              <div className="h-1/2 w-full p-4 overflow-hidden rounded-md group-hover:opacity-75">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="w-full text-center text-techie-gray-900 text-2xl font-normal font-ubuntu">
                {product.title}
              </div>
              <div className="w-full text-center text-techie-gray-600 text-base font-light font-manrope tracking-wide">
                {product.description}
              </div>
              <div className="pt-4 w-full flex justify-between">
                <p className="text-techie-gray-600 text-base font-normal font-['Manrope']">
                  € {product.price}
                </p>
                <icons.ProductHeartIcon className="h-6 w-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
