import React from "react";
import Logo from "../img/logo.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

import { Link } from "react-router-dom";

function Nav({ onSearch, lang }) {
  if (parseInt(lang) === 1) {
    return (
      <nav className="navbar">
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
          <span className="aboutNav">ACERCA</span>
        </Link>
        <SearchBar onSearch={onSearch} lang={lang}/>
      </nav>
    );
    
  } else {
    return (
      <div className="NavbarContainer">
        <nav   className="navbar">
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
          <SearchBar onSearch={onSearch} lang={lang}/>
        </nav>        
        <Link to= "/about">
        <span className="aboutNav">ABOUT</span>
        </Link>
    </div>
    );
    
  }
  
}

export default Nav;


