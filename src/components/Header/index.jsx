import "./style.css";
import {Logo} from '../../assets/images/index'
import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <div className="nav-box">
        <img src={Logo} alt="" />
        <h1>Nexcent</h1>
      </div>
      <div className="nav">
        <nav className="nav-items">
          <a href="">Home</a>
          <a href="">Service</a>
          <a href="">Feature</a>
          <a href="">Product</a>
          <a href="">Testiminials</a>
          <a href="">FAQ</a>
        </nav>
      </div>
      <div className="nav-FINAL">
        <button  className="button1" type="submit">Login</button>
        <button className="button2" type="submit">Sign up</button>
      </div>
    </div>
  );
}
