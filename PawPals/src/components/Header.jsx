import React from "react";
import "../CSS/Header.css";

function Header() {
  return (
      <nav className="nav">
        <header className="header">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg?w=900&t=st=1700557351~exp=1700557951~hmac=f2fafe342ef9bf250c93201f868ad647c5e3455d176b1c5a2530001a7322f75b"
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
