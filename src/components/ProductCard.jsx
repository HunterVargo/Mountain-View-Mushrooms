import React, { useState } from "react";
import MiniProductCard from "./MiniProductCard";

const ProductCard = ({ ProductData }) => {
  const [DisplayMushroom, setDisplayMushroom] = useState(ProductData[0]);

  function getMiniProductCard(e) {
    const TheId = e.target.id;
    setDisplayMushroom(ProductData[TheId - 1]);
    console.log(DisplayMushroom);
  }

  return DisplayMushroom.type === "Tech-Hardware" ? (
    <div className="w-maxView p-20">
      <div className="bg-Jasmine p-12 rounded-xl">
        <div className=" grid grid-cols-2">
          <div className="p-6">
            <h2 className="text-4xl mb-6 font-medium">
              {DisplayMushroom.type}
            </h2>
            <h1 className="text-6xl font-bold">{DisplayMushroom.Species}</h1>
            <p className="mt-4 leading-relaxed text-xl">
              {DisplayMushroom.Description}
            </p>
            <div className="py-6 flex space-x-4">
              {ProductData.map((mushroomdata) => {
                return (
                  <MiniProductCard
                    img={mushroomdata.Image}
                    key={mushroomdata.id}
                    ComNum={mushroomdata.id}
                    Highlight={
                      DisplayMushroom.id === mushroomdata.id
                        ? "shadow-xl animate-pulse"
                        : null
                    }
                    getCardData={(e) => getMiniProductCard(e)}
                  />
                );
              })}
            </div>
          </div>
          <img
            className="drop-shadow-md"
            src={`/img/${DisplayMushroom.Image}`}
            alt=""
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-maxView p-20">
      <div className="bg-Jasmine grid grid-cols-2 p-12 rounded-xl">
        <div className="">
          <img
            className="drop-shadow-md"
            src={`/img/${DisplayMushroom.Image}`}
            alt=""
          />
        </div>
        <div className="p-6">
          <h2 className="text-4xl mb-6 font-medium">{DisplayMushroom.type}</h2>
          <h1 className="text-6xl font-bold">{DisplayMushroom.Species}</h1>
          <p className="mt-4 leading-relaxed text-xl">
            {DisplayMushroom.Description}
          </p>
          <div className="py-6 flex space-x-4">
            {ProductData.map((mushroomdata) => {
              return (
                <MiniProductCard
                  img={mushroomdata.Image}
                  key={mushroomdata.id}
                  ComNum={mushroomdata.id}
                  Highlight={
                    DisplayMushroom.id === mushroomdata.id
                      ? "shadow-xl animate-pulse"
                      : null
                  }
                  getCardData={(e) => getMiniProductCard(e)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
