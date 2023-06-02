import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Appartment from "./pages/Appartment";
import Basket from "./pages/Basket";
import AppartmentList from "./pages/AppartmentList";

function App() {
  return (
    <div>
      <div>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appartmentList" element={<AppartmentList />} />
        <Route path="/appartment" element={<Appartment />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
