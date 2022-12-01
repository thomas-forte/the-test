import * as React from "react";
import { Link } from "gatsby";

const Header = ({ children }) => (
  <>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <Link to="/" className="navbar-brand">
          Test?
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/test" className="nav-link" activeClassName="active">
                Test
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/failure" className="nav-link" activeClassName="active">
                Not a Test
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
