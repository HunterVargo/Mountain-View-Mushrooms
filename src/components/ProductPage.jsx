import React from "react";
// import Mushcard from "./MushroomCard";
import "./ProductPageStyling.css";
import Header from "./Header";
export default function Product() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex items-center justify-center h-5/6">
        <h1 className="text-2xl p-1 inline-block ">Product Coming Soon...</h1>
      </div>
    </div>
  );
}
