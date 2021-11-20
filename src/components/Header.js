import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useGlobalContext } from "../context";

function Header() {
  const { showMenu, toggleMenu, closeMenu } = useGlobalContext();

  return (
    <>
      <div className="header-placeholder"></div>
      <header className="nav-header">
        <div className={`header-center ${showMenu ? "show" : null}`}>
          <div className="logo-mobile">
            <Logo />
          </div>
          <nav>
            <Link to="/homes/for-sale">Buy a Home</Link>
            <Logo />
            <Link to="/homes/for-rent">Rent a Home</Link>
            <button className="close-menu-btn" onClick={closeMenu}>
              <span className="visually-hidden">close menu</span>
              <IoCloseOutline aria-hidden="true" />
            </button>
          </nav>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="visually-hidden">menu button</span>
            <FaBars aria-hidden="true" />
          </button>
          <div className="bcg-blur" onClick={closeMenu}></div>
        </div>
      </header>
    </>
  );
}

export default Header;
