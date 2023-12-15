import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { NavbarSubitem, icons } from "../components";

interface NavBarOptionProps {
  option: { name: string; subitems: string[] };
  selectedTab: string | null;
  handleItemClick: (option: string) => void;
}

export const NavBarOption = ({
  option,
  selectedTab,
  handleItemClick,
}: NavBarOptionProps) => {
  return (
    <Fragment key={option.name}>
      <li>
        <button
          onClick={() => handleItemClick(option.name)}
          className={twMerge(
            "w-full flex justify-between gap-x-3 lg:p-2 text-orange-600 leading-6 font-semibold transition-all duration-300 lg:outline-none lg:hover:outline-2 lg:hover:outline-orange-100 lg:rounded-full",
            option.name === selectedTab &&
              "lg:outline-2 lg:outline-orange-100 lg:rounded-full"
          )}
        >
          {option.name}
          <icons.ArrowSidebarIcon
            className={twMerge(
              "h-6 w-6 shrink-0 transform lg:-rotate-90",
              option.name === selectedTab && "rotate-180 lg:rotate-90"
            )}
          />
        </button>
      </li>
      <ul
        className={twMerge(
          "w-full h-fit flex flex-col gap-y-4 text-xs transition-all duration-300 lg:hidden",
          option.name !== selectedTab && "hidden"
        )}
      >
        {option.subitems.map((subitem: string) => (
          <NavbarSubitem key={subitem} subitem={subitem} />
        ))}
      </ul>
    </Fragment>
  );
};
