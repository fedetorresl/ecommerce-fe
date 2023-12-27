import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Product, getProductsQuery } from "../api/products";
import { ProductCard, icons } from "../components";

export function Main() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search") || "";

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    isError,
  } = useInfiniteQuery({
    ...getProductsQuery(searchTerm),
    getNextPageParam: (lastPage) => {
      if (lastPage.skip + lastPage.limit < lastPage.total)
        return lastPage.skip + lastPage.limit;
      return null;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center w-full h-screen items-center">
        <icons.SpinnerIcon className="w-32 h-32" />
      </div>
    );

  if (isError) return "An error has occurred: " + error.message;

  return (
    <div className="bg-white">
      <div className="mx-auto md:max-w-2xl px-20 py-5 sm:px-6 sm:py-6 lg:max-w-6xl lg:px-16 flex flex-col items-center gap-10">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {data?.pages.map((page) =>
            page.products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
        {hasNextPage ? (
          <button
            className="w-32 h-11 px-6 py-3 bg-orange-600 rounded-full justify-center items-center gap-2 inline-flex font-manrope text-white hover:bg-techie-gray-300"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            Load More
          </button>
        ) : (
          "Nothing more to load"
        )}
      </div>
      {isFetchingNextPage && (
        <icons.SpinnerIcon className="position fixed z-50 w-20 h-20 bottom-2 right-0" />
      )}
    </div>
  );
}
