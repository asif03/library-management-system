import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-pattern bg-cover">{children}</div>
  );
};

export default Layout;
