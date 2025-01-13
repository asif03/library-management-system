import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-pattern h-screen">{children}</div>;
};

export default Layout;
