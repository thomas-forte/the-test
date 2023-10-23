import * as React from "react";

const Layout = ({ className, children }) => (
  <main className={className + " container"}>{children}</main>
);

export default Layout;
