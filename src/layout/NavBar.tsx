import { Fragment, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { SortByMenu, icons } from "../components";

const initialNavbarOptions = [
  {
    name: "New In",
    href: "#",
    current: false,
    subitems: ["New In 1", "New In 2"],
  },
  {
    name: "Clothing",
    href: "#",
    current: false,
    subitems: [
      "New In",
      "See all",
      "Coats",
      "Beach clothes",
      "Sweaters & hoodies",
      "Shirts",
      "Jeans and pants",
      "T-shirts",
      "Shorts",
      "Underwear",
      "SALE",
    ],
  },
  {
    name: "Footwear",
    href: "#",
    current: false,
    subitems: ["Footwear 1", "Footwear 2"],
  },
  {
    name: "Accessories",
    href: "#",
    current: false,
    subitems: ["Accessories 1", "Accessories 2"],
  },
  {
    name: "SALE",
    href: "#",
    current: false,
    subitems: ["SALE 1", "SALE 2"],
  },
];

export function NavBar() {
  const [navigationArray, setNavigationArray] = useState(initialNavbarOptions);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleItemClick = (name: string) => {
    const updatedNavigation = navigationArray.map((item) => ({
      ...item,
      current: !item.current && item.name === name,
    }));
    setNavigationArray(updatedNavigation);
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 lg:bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-1">
                <div className="grow flex flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 max-w-[270px] shadow-md">
                  <div className="flex h-16 shrink-0 items-center">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <icons.CloseSidebarIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7 lg:gap-y-3 text-xs">
                      {navigationArray.map((item) => (
                        <Fragment key={item.name}>
                          <li>
                            <button
                              onClick={() => handleItemClick(item.name)}
                              className={twMerge(
                                "w-full flex justify-between gap-x-3 lg:p-2 text-orange-600 leading-6 font-semibold transition-all duration-300 lg:outline-none lg:hover:outline-2 lg:hover:outline-orange-100 lg:rounded-full",
                                item.current &&
                                  "lg:outline-2 lg:outline-orange-100 lg:rounded-full"
                              )}
                            >
                              {item.name}
                              <icons.ArrowSidebarIcon
                                className={twMerge(
                                  "h-6 w-6 shrink-0 transform lg:-rotate-90",
                                  item.current ? "rotate-180 lg:rotate-90" : ""
                                )}
                              />
                            </button>
                          </li>
                          <ul
                            className={twMerge(
                              "w-full h-fit flex flex-col gap-y-4 text-xs transition-all duration-300 lg:hidden",
                              !item.current && "hidden"
                            )}
                          >
                            {item.subitems.map((subitem) => (
                              <li key={subitem} className="lg:pl-3">
                                {subitem}
                              </li>
                            ))}
                          </ul>
                        </Fragment>
                      ))}
                    </ul>
                  </nav>
                </div>
                {navigationArray.map((item) => (
                  <div
                    key={item.name}
                    className={twMerge(
                      "grow flex-col gap-y-3 overflow-y-auto bg-white px-6 pb-4 pt-[5.25rem] max-w-[270px] hidden",
                      item.current && "lg:flex"
                    )}
                  >
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-3">
                        {item.subitems.map((subitem) => (
                          <li
                            key={subitem}
                            className="lg:pl-3 text-orange-600 text-xs leading-6 font-semibold"
                          >
                            <button
                              className={
                                "w-full group flex justify-between gap-x-3 lg:p-2 text-orange-600 leading-6 font-semibold transition-all duration-300"
                              }
                            >
                              {subitem}
                              <icons.ArrowSidebarIcon className="h-6 w-6 shrink-0 transform lg:-rotate-90" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                ))}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="flex flex-col items-center pt-10 lg:pt-3 px-5 gap-4">
        <div className="sticky top-0 z-40 flex w-full h-16 shrink-0 items-center bg-white sm:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <icons.SidebarIcon className="h-10 w-10 lg:hidden" />
            <icons.SidebarDesktopIcon className="h-6 w-6 hidden lg:block" />
          </button>

          <div className="flex flex-1 items-center justify-between self-stretch lg:gap-x-6">
            <h2 className="text-2xl lg:text-3xl font-ubuntu text-very-dark-gray text-center lg:text-start w-full">
              Find what you need
            </h2>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <form
              className="relative hidden lg:flex rounded-md border border-primary-techie-gray-100 bg-primary-techie-gray-050 p-3 lg:w-72 gap-3 items-center"
              action="#"
              method="GET"
            >
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <input
                id="search-field"
                className="block h-full placeholder:text-techie-gray-300 focus:ring-0 text-sm outline-none  w-11/12"
                placeholder="Search..."
                type="search"
                name="search"
              />
              <MagnifyingGlassIcon
                className="pointer-events-none h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </form>
            <SortByMenu />
          </div>
        </div>
        <form
          className="relative flex justify-between lg:hidden rounded-md border border-primary-techie-gray-100 bg-primary-techie-gray-050 p-3 gap-3 w-full items-center"
          action="#"
          method="GET"
        >
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <input
            id="search-field"
            className="block h-7 text-gray-900 placeholder:text-gray-400 text-sm outline-none w-11/12"
            placeholder="Search..."
            type="search"
            name="search"
          />
          <MagnifyingGlassIcon
            className="pointer-events-none h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </form>
      </div>
    </>
  );
}
