import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { TbChefHat } from "react-icons/tb";

const LandingPage = () => {
  const [DisplaySize, setDisplaySize] = useState(window.innerWidth);

  useEffect(() => {
    function WacthWidth() {
      setDisplaySize(window.innerWidth);
    }
    window.addEventListener("resize", WacthWidth);

    return () => {
      window.removeEventListener("resize", WacthWidth);
    };
  }, []);

  return DisplaySize >= 1280 ? (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Mountain View Mushrooms</title>
        <meta
          name="description"
          content="Gourmet mushroom farm located in north-east Pennsylvania. Find all things mushroom related here."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="flex justify-center">
        <div className=" flex my-32 justify-between w-maxView  p-20">
          <div className=" font-inter text-EerieBlack w-1/3 grid">
            <h1
              className=" font-bold text-8xl"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Eat More Mushrooms
            </h1>
            <p className="mt-6 text-2xl leading-10">
              There is nothing better than fresh gourmet mushrooms. Mountain
              View Mushrooms is here to fulfill that desire.
            </p>
            <div className="flex items-center mt-6 text-3xl">
              <button className="bg-HunyadiYellow shadow-xl text-GhostWhite rounded-xl px-10 py-6">
                Grow
              </button>
              <div className="flex items-center w-full justify-center animate-pulse">
                <TbChefHat />
                <button>Recipes</button>
              </div>
            </div>
          </div>
          <img
            className="rounded-3xl w-5/12 shadow-xl"
            src="/Img/KingTCooked.jpg"
            alt="King Trumpets Cooked"
          />
        </div>
      </div>
      <div className="bg-Jasmine py-16 my-22 w-svw flex justify-center">
        <div className="flex justify-between  w-maxView p-20">
          <img
            className="rounded-3xl w-5/12 shadow-xl"
            src="/Img/MushroomDisplay.jpg"
            alt="King Trumpets Cooked"
          />
          <div className="font-inter text-EerieBlack text-right flex-wrap justify-end grid">
            <h1
              className="font-bold text-8xl"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Find Fresh Mushrooms
            </h1>
            <div className="flex justify-end">
              <p className=" text-2xl w-4/5 leading-10 mt-6">
                There is nothing better than fresh gourmet mushrooms. Mountain
                View Mushrooms is here to fulfill that desire.
              </p>
            </div>
            <div className="flex justify-end items-center mt-6 text-3xl">
              <button className="bg-EerieBlack shadow-xl text-GhostWhite rounded-xl  px-10 py-6">
                Locations
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex my-32 justify-between w-maxView p-20">
          <div className="font-inter text-EerieBlack grid">
            <h1
              className="font-bold text-8xl"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Learn To <br /> Grow!
            </h1>
            <p className="mt-12 text-2xl leading-10">
              Mushrooms can be a lot of fun to grow. There is something
              rewarding about eating home grown food.
            </p>
            <div className="flex item-center mt-6 text-3xl">
              <button className="bg-HunyadiYellow text-GhostWhite rounded-xl  px-10 py-6 shadow-xl">
                Video Collection
              </button>
            </div>
          </div>
          <img
            className="rounded-3xl w-5/12 shadow-xl"
            src="/Img/mushroomkit.jpg"
            alt="Halloween Grow Kits"
          />
        </div>
      </div>
    </div>
  ) : (
    <div>heloo</div>
  );
};

export default LandingPage;
