import React from "react";
import labels from "../../utils/label.json";
import Navlinks from "../../component/atoms/navlinks/navlinks";
import CartSvgr from "../../component/Svgr/CartSvgr";
import SearchSvgr from "../../component/Svgr/SearchSvgr";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navigation">
        <ul className="navigation-heading">
          <li>
            <h1>COZA STORE</h1>
          </li>
          <li>
            <button>=</button>
          </li>
        </ul>
        <ul className="nav-links">
          {Object.values(Object.values(labels)[0]?.navlinks).map((label) => (
            <Navlinks label={label} />
          ))}
        </ul>
        <ul className="cart-svgr">
          <li>
            {/* <input type="search" /> */}
            <SearchSvgr />
          </li>
          <li>
            <CartSvgr />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
