import React from "react";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#FFCF7F" }}
      >
        <a className="navbar-brand m-1" href="#">
          Carry Bags
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Features
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li>
              <input
                className="form-control mr-sm-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
            <li>
              <button className="btn btn-outline-success " type="submit">
                <FaSearch />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
