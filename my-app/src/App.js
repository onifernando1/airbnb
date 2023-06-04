import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Appartment from "./pages/Appartment";
import Basket from "./pages/Basket";
import AppartmentList from "./pages/AppartmentList";
import logo from "./assets/images/logo.png";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appartmentList" element={<AppartmentList />} />
        <Route path="/appartment" element={<Appartment />} />
        <Route path="/appartment/:id" element={<Appartment />}></Route>
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
