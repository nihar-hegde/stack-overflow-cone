"use client";

import { logout } from "@/lib/actions/logout.actions";
import { ReactNode } from "react";

interface LogoutButtonProps {
  children?: ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer dark:text-light-800">
      {children}
    </span>
  );
};
