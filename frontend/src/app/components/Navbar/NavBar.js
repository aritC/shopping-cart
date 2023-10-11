import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const user = useSelector((store) => store.userReducer.User);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top  mb-5 px-5">
      <Link className="navbar-brand" to="/">
        Shopping Cart App
      </Link>
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
      <div className="navbar-collapse collapse" id="navItems">
        <div className="navbar-nav me-auto">
          {props.navItems
            .filter((navItem) => {
              if (navItem.isNavItem) {
                if (navItem.isAdminRoute && user.userName === "admin") {
                  return navItem;
                } else if (!navItem.isAdminRoute) {
                  return navItem;
                }
              }
            })
            .map((navItem, idx) => {
              const timestamp = Date.now();
              return (
                <Link
                  className="nav-item nav-link"
                  to={navItem.url}
                  key={idx + timestamp}
                >
                  {navItem.name}
                </Link>
              );
            })}
        </div>
        <div className="navbar-nav">
          {user._id !== "" ? (
            <Link className="nav-item nav-link" to="/login">
              User Profile
            </Link>
          ) : (
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
