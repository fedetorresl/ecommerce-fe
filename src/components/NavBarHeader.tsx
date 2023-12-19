import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { SortByMenu, icons } from "../components";

export const NavBarHeader = ({
  setSidebarOpen,
}: {
  setSidebarOpen: (isOpened: boolean) => void;
}) => {
  return (
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
  );
};
