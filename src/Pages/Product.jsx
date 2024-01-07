import React from "react";
import ProductCard from "../components/ProductCard";
import ProductPgData from "../Data/ProductPgData";

const Product = () => {
  return (
    <div className="my-32">
      <ProductCard ProductData={ProductPgData.data.MushroomType} />
      <ProductCard ProductData={ProductPgData.data.TechHardware} />
    </div>
  );
};

export default Product;
