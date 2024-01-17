import React from "react";
import LandingPage from "./Pages/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product.jsx";
import Layout from "./Layout.jsx";
import Tools from "./Pages/Tools.jsx";
import About from "./Pages/About.jsx";
import Recipes from "./Pages/Recipes.jsx";
import SelectedRecipe from "./Pages/SelectedRecipe.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="product" element={<Product />} />
        <Route path="software" element={<Tools />} />
        <Route path="about" element={<About />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<SelectedRecipe />} />
      </Route>
    </Routes>
  );
}

export default App;
