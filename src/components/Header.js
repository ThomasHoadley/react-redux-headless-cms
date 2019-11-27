import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink to="/" exact>
      Home
    </NavLink>
    |
    <NavLink to="/agencies" exact>
      Agencies
    </NavLink>
  </header>
);

export default Header;
