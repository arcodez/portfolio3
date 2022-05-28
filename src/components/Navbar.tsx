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
            <Link to="/">Abel Rodriguez.</Link>
          </i>
          <i className="links-wrapper">
            <Link to={"/#work"}>
              <button>Work</button>
            </Link>
            <Link to={"/#about"}>
              <button>About</button>
            </Link>
            <Link to={"#contact"}>
              <button>Contact</button>
            </Link>
            <ThemeChanger />
          </i>
        </i>
      </i>
    </i>
  );
};

export default Navbar;
