import React from "react";

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
            Portfolio.
          </i>
          <i className="links-wrapper">
            <button>Work</button>
            <button>About</button>
            <button>Contact</button>
          </i>
        </i>
      </i>
    </i>
  );
};

export default Navbar;
