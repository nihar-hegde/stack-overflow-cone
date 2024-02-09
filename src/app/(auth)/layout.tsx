import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-gray-700 to-black">
      {children}
    </main>
  );
};

export default Layout;
