import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartLength }) => {

  return (
    
    <nav className="nav-bar">
      <Link className="link" to="/">HOME</Link> | <Link className="link" to="/cart">RECIPES ({cartLength})</Link>
    </nav>

  );
};

export default Navbar;
