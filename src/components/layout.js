import * as React from "react";

import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <main className="container my-5">{children}</main>
  </>
);

export default Layout;
