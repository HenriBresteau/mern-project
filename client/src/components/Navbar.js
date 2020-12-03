import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon.png" alt="logo raccoont" />
              <h3>Raccoont</h3>
            </div>
          </NavLink>
        </div>
      </div>
      NAVABAR
    </nav>
  );
};

export default Navbar;
