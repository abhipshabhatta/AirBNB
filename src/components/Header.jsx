import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="header-logo">
          <span>Airbnb</span>
          <img src={headerLogo} alt="AirBNB logo" />
          </Link>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
