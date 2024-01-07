import React from "react";
import MiniProductCard from "./MiniProductCard";
import MushroomData from "../Data/MushroomData";

const ProductCard = ({ mushroomType, img }) => {
  return (
    <div className="w-maxView p-20">
      <div className="bg-Jasmine grid grid-cols-2 p-12 rounded-xl">
        <div>
          <img src={`/img/${img}`} alt="" />
        </div>
        <div>
          <h2 className="text-4xl mb-6 font-medium">Mushrooms</h2>
          <h1 className="text-6xl font-bold">{mushroomType}</h1>
          <p className="mt-4">
            The King pearl mushrooms is delicious and so tasty with steak so
            yummy and tasty.
          </p>
          <div className="py-6 flex space-x-4">
            {MushroomData.data.MushroomType.map((mushroomData) => {
              return <MiniProductCard img={mushroomData.Image} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
