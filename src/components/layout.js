import * as React from "react";

import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <main className="container">{children}</main>
  </>
);

export default Layout;
