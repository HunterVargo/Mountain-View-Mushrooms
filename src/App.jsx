import React from "react";
import LandingPage from "./Pages/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product.jsx";

function App() {
  return (
    <Routes>
      <Route exact index element={<LandingPage />} />
      <Route path="product" element={<Product />} />
    </Routes>
  );
}

export default App;
