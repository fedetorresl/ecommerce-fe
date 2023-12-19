import { twMerge } from "tailwind-merge";
import { icons } from ".";

interface NavBarSubmenuProps {
  option: { name: string; subitems: string[] };
  selectedTab: string | null;
}

export const NavbarSubmenu = ({ option, selectedTab }: NavBarSubmenuProps) => {
  return (
    <div
      key={option.name}
      className={twMerge(
        "grow flex-col gap-y-3 overflow-y-auto bg-white px-6 pb-4 pt-[5.25rem] max-w-[270px] hidden",
        option.name === selectedTab && "lg:flex"
      )}
    >
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-3">
          {option.subitems.map((subitem) => (
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
  );
};
