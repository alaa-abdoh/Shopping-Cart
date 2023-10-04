import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faList } from "@fortawesome/free-solid-svg-icons";

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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
