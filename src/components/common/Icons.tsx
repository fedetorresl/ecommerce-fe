import type { ComponentPropsWithoutRef } from "react";
import * as heroIcons from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

export type SVGProps = ComponentPropsWithoutRef<"svg">;

export const icons = {
  ...heroIcons,

  SidebarIcon: ({ className, ...props }: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-alt-circle-up"
      className={twMerge("h-11 w-11", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 17.8334C29.2917 18.1786 29.0119 18.4584 28.6667 18.4584L15.3334 18.4584C14.9882 18.4584 14.7084 18.1786 14.7084 17.8334C14.7084 17.4882 14.9882 17.2084 15.3334 17.2084L28.6667 17.2084C29.0119 17.2084 29.2917 17.4882 29.2917 17.8334Z"
        fill="#F96332"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 22C29.2917 22.3452 29.0119 22.625 28.6667 22.625L15.3334 22.625C14.9882 22.625 14.7084 22.3452 14.7084 22C14.7084 21.6548 14.9882 21.375 15.3334 21.375L28.6667 21.375C29.0119 21.375 29.2917 21.6548 29.2917 22Z"
        fill="#F96332"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 26.1666C29.2917 26.5118 29.0119 26.7916 28.6667 26.7916L15.3334 26.7916C14.9882 26.7916 14.7084 26.5118 14.7084 26.1666C14.7084 25.8214 14.9882 25.5416 15.3334 25.5416L28.6667 25.5416C29.0119 25.5416 29.2917 25.8214 29.2917 26.1666Z"
        fill="#F96332"
      />
    </svg>
  ),

  SidebarDesktopIcon: ({ className, ...props }: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-alt-circle-up"
      fill="none"
      className={twMerge("h-11 w-11", className)}
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="21"
        stroke="#EA580C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 17.8333C29.2917 18.1785 29.0118 18.4583 28.6667 18.4583L15.3333 18.4583C14.9882 18.4583 14.7083 18.1785 14.7083 17.8333C14.7083 17.4882 14.9882 17.2083 15.3333 17.2083L28.6667 17.2083C29.0118 17.2083 29.2917 17.4882 29.2917 17.8333Z"
        fill="#F96332"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 22C29.2917 22.3452 29.0118 22.625 28.6667 22.625L15.3333 22.625C14.9882 22.625 14.7083 22.3452 14.7083 22C14.7083 21.6548 14.9882 21.375 15.3333 21.375L28.6667 21.375C29.0118 21.375 29.2917 21.6548 29.2917 22Z"
        fill="#F96332"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2917 26.1667C29.2917 26.5118 29.0118 26.7917 28.6667 26.7917L15.3333 26.7917C14.9882 26.7917 14.7083 26.5118 14.7083 26.1667C14.7083 25.8215 14.9882 25.5417 15.3333 25.5417L28.6667 25.5417C29.0118 25.5417 29.2917 25.8215 29.2917 26.1667Z"
        fill="#F96332"
      />
    </svg>
  ),

  CloseSidebarIcon: ({ className, ...props }: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-alt-circle-up"
      className={twMerge("h-5 w-5 ", className)}
      {...props}
    >
      <g id="Close Circle">
        <g id="Vector">
          <path
            d="M8.35854 7.47472C8.11447 7.23064 7.71874 7.23064 7.47466 7.47472C7.23058 7.71879 7.23058 8.11452 7.47466 8.3586L9.11606 10L7.47468 11.6414C7.2306 11.8855 7.2306 12.2812 7.47468 12.5253C7.71875 12.7693 8.11448 12.7693 8.35856 12.5253L9.99994 10.8839L11.6413 12.5253C11.8854 12.7693 12.2811 12.7693 12.5252 12.5253C12.7693 12.2812 12.7693 11.8854 12.5252 11.6414L10.8838 10L12.5252 8.35862C12.7693 8.11454 12.7693 7.71881 12.5252 7.47473C12.2811 7.23066 11.8854 7.23066 11.6413 7.47473L9.99994 9.11612L8.35854 7.47472Z"
            fill="#F97316"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99996 1.04167C5.05241 1.04167 1.04163 5.05245 1.04163 10C1.04163 14.9476 5.05241 18.9583 9.99996 18.9583C14.9475 18.9583 18.9583 14.9476 18.9583 10C18.9583 5.05245 14.9475 1.04167 9.99996 1.04167ZM2.29163 10C2.29163 5.74281 5.74276 2.29167 9.99996 2.29167C14.2572 2.29167 17.7083 5.74281 17.7083 10C17.7083 14.2572 14.2572 17.7083 9.99996 17.7083C5.74276 17.7083 2.29163 14.2572 2.29163 10Z"
            fill="#F97316"
          />
        </g>
      </g>
    </svg>
  ),

  ArrowSidebarIcon: ({ className, ...props }: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-alt-circle-up"
      className={twMerge("h-5 w-5 ", className)}
      {...props}
    >
      <g id="Alt Arrow Down">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.69213 7.09327C3.91677 6.83119 4.31133 6.80084 4.57341 7.02548L10 11.6768L15.4266 7.02548C15.6887 6.80084 16.0832 6.83119 16.3079 7.09327C16.5325 7.35535 16.5022 7.74991 16.2401 7.97455L10.4067 12.9745C10.1727 13.1752 9.82731 13.1752 9.59325 12.9745L3.75992 7.97455C3.49784 7.74991 3.46749 7.35535 3.69213 7.09327Z"
          fill="#F96332"
        />
      </g>
    </svg>
  ),

  OrderByIcon: ({ className, ...props }: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-alt-circle-up"
      className={twMerge("h-11 w-11 ", className)}
      {...props}
    >
      <g clipPath="url(#clip0_197_14199)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.3333 16.375C25.5024 16.375 25.6643 16.4435 25.782 16.5649L29.1153 20.0024C29.3556 20.2502 29.3495 20.6459 29.1017 20.8862C28.8539 21.1265 28.4583 21.1204 28.218 20.8726L25.9583 18.5423L25.9583 27C25.9583 27.3452 25.6785 27.625 25.3333 27.625C24.9881 27.625 24.7083 27.3452 24.7083 27L24.7083 18.5423L22.4487 20.8726C22.2084 21.1204 21.8127 21.1265 21.5649 20.8862C21.3171 20.6459 21.311 20.2502 21.5513 20.0024L24.8846 16.5649C25.0023 16.4435 25.1642 16.375 25.3333 16.375ZM18.6666 16.375C19.0118 16.375 19.2916 16.6548 19.2916 17L19.2916 25.4577L21.5513 23.1274C21.7916 22.8796 22.1873 22.8735 22.4351 23.1138C22.6829 23.3541 22.689 23.7498 22.4487 23.9976L19.1153 27.4351C18.9976 27.5565 18.8357 27.625 18.6666 27.625C18.4976 27.625 18.3357 27.5565 18.218 27.4351L14.8846 23.9976C14.6443 23.7498 14.6504 23.3541 14.8982 23.1138C15.146 22.8735 15.5417 22.8796 15.782 23.1274L18.0416 25.4577L18.0416 17C18.0416 16.6548 18.3215 16.375 18.6666 16.375Z"
          fill="#EA580C"
        />
      </g>
      <defs>
        <clipPath id="clip0_197_14199">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  ChevronDownIcon: ({ className, ...props }: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-alt-circle-up"
      fill="none"
      className={twMerge("h-11 w-11 ", className)}
      strokeWidth="1.5"
      stroke="#ABAEB7"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),

  HeartIcon: ({ className, ...props }: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-alt-circle-up"
      className={twMerge("h-4 w-4 ", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.74925 2.9494C2.64325 3.45496 1.83301 4.65743 1.83301 6.09134C1.83301 7.55627 2.43249 8.68543 3.29187 9.65312C4.00016 10.4507 4.85757 11.1117 5.69376 11.7563C5.89236 11.9095 6.08977 12.0617 6.2837 12.2145C6.63439 12.491 6.94722 12.7336 7.24875 12.9098C7.55044 13.0861 7.79327 13.1666 7.99967 13.1666C8.20608 13.1666 8.44891 13.0861 8.7506 12.9098C9.05213 12.7336 9.36496 12.491 9.71564 12.2145C9.90957 12.0617 10.107 11.9095 10.3056 11.7563C11.1418 11.1117 11.9992 10.4507 12.7075 9.65312C13.5669 8.68543 14.1663 7.55627 14.1663 6.09134C14.1663 4.65743 13.3561 3.45496 12.2501 2.9494C11.1756 2.45826 9.7319 2.58833 8.35992 4.01376C8.26566 4.11169 8.1356 4.16703 7.99967 4.16703C7.86375 4.16703 7.73369 4.11169 7.63943 4.01376C6.26745 2.58833 4.82372 2.45826 3.74925 2.9494ZM7.99968 2.97248C6.45831 1.59344 4.73232 1.40052 3.33352 2.03991C1.85615 2.71522 0.833008 4.2833 0.833008 6.09134C0.833008 7.86836 1.57334 9.22398 2.54415 10.3171C3.32159 11.1926 4.27316 11.9252 5.11356 12.5723C5.30407 12.719 5.48886 12.8613 5.66462 12.9999C6.00611 13.2691 6.3727 13.5561 6.74422 13.7732C7.11558 13.9902 7.53941 14.1666 7.99967 14.1666C8.45994 14.1666 8.88377 13.9902 9.25513 13.7732C9.62665 13.5561 9.99324 13.2691 10.3347 12.9999C10.5105 12.8613 10.6953 12.719 10.8858 12.5723C11.7262 11.9252 12.6778 11.1926 13.4552 10.3171C14.426 9.22398 15.1663 7.86836 15.1663 6.09134C15.1663 4.2833 14.1432 2.71522 12.6658 2.03991C11.267 1.40052 9.54105 1.59344 7.99968 2.97248Z"
        fill="#1C202E"
      />
    </svg>
  ),
};

export const IconWrapper = ({
  size = "md",
  className,
  style,
  children,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => (
  <div
    className={twMerge(
      "item-center flex flex-row",
      size === "sm" && "h-5 w-5",
      size === "md" && "h-6 w-6",
      size === "lg" && "h-6 w-6",
      size === "xl" && "h-10 w-10",
      className
    )}
    style={style}
  >
    {children}
  </div>
);
