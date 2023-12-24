import React from "react";
import LandingPage from "./components/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
