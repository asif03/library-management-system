import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="wrapper">{children}</div>;
};
export default AuthLayout;
