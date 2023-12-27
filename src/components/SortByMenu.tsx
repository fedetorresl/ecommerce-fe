import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { icons } from "./common";

const options = [
  {
    name: "My Favorites",
    key: "favorites",
    icon: icons.HeartIcon,
  },
  {
    name: "Price - from high to low",
    key: "price-desc",
  },
  {
    name: "Price - from low to high",
    key: "price-asc",
  },
  {
    name: "Alphabetical order",
    key: "alphabetical",
  },
];

export const SortByMenu = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="h-12 inline-flex items-center justify-between gap-x-1 text-sm leading-6 text-gray-900 lg:w-44 rounded-md lg:border lg:border-primary-techie-gray-100 lg:bg-primary-techie-gray-050 lg:p-4 outline-none lg:outline">
        <span className="hidden lg:block text-techie-gray-300">Sort By</span>
        <icons.ChevronDownIcon
          className="hidden lg:block h-5 w-5"
          aria-hidden="true"
        />
        <icons.OrderByIcon className="lg:hidden h-10 w-10" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 mt-5 flex">
          <div className="flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-techie-gray-300/5">
            <div className="space-y-3 p-4">
              {options.map((option) => (
                <div
                  key={option.name}
                  className="relative flex items-center gap-x-6 rounded-lg hover:bg-gray-50"
                >
                  {option.icon && (
                    <div className="flex h-5 w-5 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <option.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="w-max">
                    <a
                      href={`?sort=${option.key}`}
                      className="text-gray-900 w-auto"
                    >
                      {option.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
