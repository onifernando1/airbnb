import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/header.css";
import search from "../assets/images/search.png";

function Header() {
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div>
        <div className="searchbar">
          <div>Anywhere </div>
          <div>|</div>
          <div>Any week </div>
          <div>|</div>
          <div>Add guests</div>
          <div className="search">
            <img src={search}></img>
          </div>
        </div>
      </div>
      <div>
        <div>Oni your home</div>
        <div>O</div>
        <div>Profile</div>
      </div>
      {/* <nav>
        <ul>
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
      </nav> */}
    </div>
  );
}

export default Header;
