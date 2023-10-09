import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <span>Alaa </span>
          <span>Shop</span>
        </div>
        <FontAwesomeIcon
          icon={faList}
          onClick={toggleMenu}
          className="menu-icon"
        />
        <ul className={`${showMenu ? "show" : "hide"}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
          <li>
            <Link to="/products/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
