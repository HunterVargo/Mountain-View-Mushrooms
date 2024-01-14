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
    <div className="sm:w-maxView sm:p-20 ">
      <div className="bg-Jasmine sm:p-12 rounded-xl w-72 sm:w-auto extrasm:w-auto">
        <div className=" sm:grid grid-cols-2 ">
          <img
            className="drop-shadow-md sm:hidden w-64 extrasm:w-auto"
            src={`/Img/${DisplayMushroom.Image}`}
            alt=""
          />
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
            className="drop-shadow-md hidden sm:block"
            src={`/Img/${DisplayMushroom.Image}`}
            alt=""
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="sm:w-maxView sm:p-20 mb-32 sm:mb-0 ">
      <div className="bg-Jasmine sm:grid grid-cols-2 sm:p-12 rounded-xl sm:w-auto w-72 extrasm:w-auto">
        <div className="">
          <img
            className="drop-shadow-md sm:w-auto w-64 extrasm:w-auto"
            src={`/Img/${DisplayMushroom.Image}`}
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
