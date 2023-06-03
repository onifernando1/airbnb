import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <div>
      <div>
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/appartmentList">Appartment List</Link>
          </li>
          <li>
            <Link to="/appartment/:id">Appartment</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
