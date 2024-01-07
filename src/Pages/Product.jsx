import React from "react";
import ProductCard from "../components/ProductCard";
import MushroomData from "../Data/MushroomData";

const Product = () => {
  return (
    <div className="my-32">
      {MushroomData.data.MushroomType.map((mushroomData) => {
        return (
          <ProductCard
            img={mushroomData.Image}
            key={mushroomData.id}
            mushroomType={mushroomData.Species}
          />
        );
      })}
    </div>
  );
};

export default Product;
