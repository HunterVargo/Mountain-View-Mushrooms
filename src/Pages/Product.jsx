import React from "react";
import ProductCard from "../components/ProductCard";
import ProductPgData from "../Data/ProductPgData";

const Product = () => {
  return (
    <div className="sm:my-32 my-6 p-6">
      <ProductCard ProductData={ProductPgData.data.MushroomType} />
      <ProductCard ProductData={ProductPgData.data.TechHardware} />
    </div>
  );
};

export default Product;
