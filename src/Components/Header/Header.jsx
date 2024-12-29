import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logo-sm.png";
import React from "react";
import cart from "../../assets/images/icons/cart-sm.png";
import search from "../../assets/images/icons/search-icon-sm.png";
function Header() {
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/mac">
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/iphone">
                    iphone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/iPad">
                    iPad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/watch">
                    watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/tv">
                    tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/music">
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/support">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#">
                    <img src={search} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
