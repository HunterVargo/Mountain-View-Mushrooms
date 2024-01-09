import React from "react";
import LandingPage from "./Pages/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product.jsx";
import Layout from "./Layout.jsx";
import Tools from "./Pages/Tools.jsx";
import About from "./Pages/About.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route exact index element={<LandingPage />} />
        <Route path="product" element={<Product />} />
        <Route path="software" element={<Tools />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
