import * as React from "react";

import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Header></Header>
    <main class="container my-5">{children}</main>
  </>
);

export default Layout;
