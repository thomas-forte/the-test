import * as React from "react";

import Header from "./Header";

const Layout = ({ className, children }) => (
  <>
    <main className={className + " container"}>{children}</main>
  </>
);

export default Layout;
