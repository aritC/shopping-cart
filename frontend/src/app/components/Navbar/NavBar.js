import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top  mb-5 px-5">
      <a className="navbar-brand" href="/">
        Shopping Cart App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navItems"
        aria-controls="navItems"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navItems">
        <div className="navbar-nav">
          {props.navItems
            .filter((navItem) => navItem.isNavItem)
            .map((navItem, idx) => {
              const timestamp = Date.now();
              return (
                <a
                  className="nav-item nav-link"
                  href={navItem.url}
                  key={idx + timestamp}
                >
                  {navItem.name}
                </a>
              );
            })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
