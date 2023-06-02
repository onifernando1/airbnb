import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Appartment from "./pages/Appartment";
import Basket from "./pages/Basket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appartment" element={<Appartment />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
}

export default App;
