import { ComponentPropsWithoutRef } from "react";
import { icons } from "../components";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const NavBarCloseBtn = ({
  type = "button",
  className,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button type={type} className={className} disabled={disabled} {...props}>
      <icons.CloseSidebarIcon className="h-6 w-6 text-white" />
    </button>
  );
};
