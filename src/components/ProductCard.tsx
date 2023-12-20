import { icons } from "./common";
import { Product } from "~/api/products";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative flex flex-col items-center justify-between gap-y-2 h-[27.5rem]">
      <div className="h-1/2 w-full p-4 overflow-hidden rounded-md group-hover:opacity-75">
        <img
          src={product.thumbnail}
          alt={product.title}
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
        <p className="text-techie-gray-600 text-base font-normal font-manrope">
          € {product.price}
        </p>
        <icons.ProductHeartIcon className="h-6 w-6" />
      </div>
    </div>
  );
};
