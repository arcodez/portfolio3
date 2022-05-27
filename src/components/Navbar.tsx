import React from "react";
import { Link } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  return (
    <i className="section">
      <i className="container">
        <i className="navbar-wrapper">
          <i
            role="button"
            // onClick={() => #home")}
            className="name"
            tabIndex={0}
          >
            <Link to="/">Portfolio.</Link>
          </i>
          <i className="links-wrapper">
            <button>Work</button>
            <button>About</button>
            <button>Contact</button>
            <ThemeChanger />
          </i>
        </i>
      </i>
    </i>
  );
};

export default Navbar;
