import React from "react";
import Logo from "../img/logo.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav   className="navbar" /* className="navbar navbar-dark bg-dark" */>
      <Link id="background" to="/">
        <span id="logoAlign" className="navbar-brand">
          <img
            id="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </span>
        Weatherify
      </Link>
      <Link to= "/about">
        <span>ABOUT</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
