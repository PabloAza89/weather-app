import React from "react";
import En from "../img/lan-en.png";
import Es from "../img/lan-es.png";
import "./Footer.css";


export default function Footer() {
  return(
    <footer className="footer">
      <img src={En} alt=""/>
      <img src={Es} alt=""/>
    </footer>
  )
}