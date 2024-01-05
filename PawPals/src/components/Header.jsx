import React from "react";
import "../CSS/Header.css";

function Header() {
  return (
      <nav className="nav">
        <header className="header">
        <img
          className="logo"
          src="../public/PawPalsLogo.avif"
        />
        <span id="title">Paw Pals</span></header>
        <ul className="navlist">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
  );
}

export default Header;
