import * as React from "react";

import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Header></Header>
    <main class="container mt-3 mb-5">{children}</main>
  </>
);

export default Layout;
