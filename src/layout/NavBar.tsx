import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  NavBarCloseBtn,
  NavBarHeader,
  NavBarOption,
  NavbarSubmenu,
} from "../components";

const navbarOptions = [
  {
    name: "New In",
    href: "#",
    subitems: ["New In 1", "New In 2"],
  },
  {
    name: "Clothing",
    href: "#",
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
    subitems: ["Footwear 1", "Footwear 2"],
  },
  {
    name: "Accessories",
    href: "#",
    subitems: ["Accessories 1", "Accessories 2"],
  },
  {
    name: "SALE",
    href: "#",
    subitems: ["SALE 1", "SALE 2"],
  },
];

export function NavBar() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleItemClick = (name: string) => {
    setSelectedTab(selectedTab === name ? null : name);
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
                    <NavBarCloseBtn
                      onClick={() => setSidebarOpen(false)}
                      className="-m-2.5 p-2.5"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7 lg:gap-y-3 text-xs">
                      {navbarOptions.map((option) => (
                        <NavBarOption
                          option={option}
                          selectedTab={selectedTab}
                          handleItemClick={handleItemClick}
                        />
                      ))}
                    </ul>
                  </nav>
                </div>
                {navbarOptions.map((option) => (
                  <NavbarSubmenu option={option} selectedTab={selectedTab} />
                ))}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <NavBarHeader setSidebarOpen={setSidebarOpen} />
    </>
  );
}
