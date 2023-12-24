import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import { TbChefHat } from "react-icons/tb";

const LandingPage = () => {
  return (
    <div className="px-20 py-8 bg-GhostWhite">
      <Helmet>
        <title>Mountain View Mushrooms</title>
        <meta
          name="description"
          content="Gourmet mushroom farm located in north-east Pennsylvania. Find all things mushroom related here."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Header />
      <div className="flex my-44 justify-between">
        <div className="font-inter text-EerieBlack w-1/3">
          <h1 className="font-bold text-8xl">
            Eat More <br /> Mushrooms
          </h1>
          <p className="mt-12 text-xl">
            There is nothing better than fresh gourmet mushrooms. Mountain View
            Mushrooms is here to fulfill that desire.
          </p>
          <div className="flex mt-6 text-xl">
            <button className="bg-HunyadiYellow text-GhostWhite rounded-xl px-4 py-2">
              Grow
            </button>
            <div className="flex items-center w-full justify-center">
              <TbChefHat />
              <button>Recipes</button>
            </div>
          </div>
        </div>
        <img
          className="rounded-3xl w-5/12"
          src="/Img/KingTCooked.jpg"
          alt="King Trumpets Cooked"
        />
      </div>
      <div className="flex my-44 justify-between">
        <img
          className="rounded-3xl w-5/12"
          src="/Img/MushroomDisplay.jpg"
          alt="King Trumpets Cooked"
        />
        <div className="font-inter text-EerieBlack text-right flex flex-wrap justify-end">
          <h1 className="font-bold text-8xl">
            Find Fresh <br /> Mushrooms
          </h1>
          <div className="flex justify-end">
            <p className="mt-12 text-xl w-4/5">
              There is nothing better than fresh gourmet mushrooms. Mountain
              View Mushrooms is here to fulfill that desire.
            </p>
          </div>
          <div className="flex mt-6 text-xl">
            <button className="bg-HunyadiYellow text-GhostWhite rounded-xl px-4 py-2">
              Locations
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-44 justify-between">
        <div className="font-inter text-EerieBlack w-1/3">
          <h1 className="font-bold text-8xl">
            Learn To <br /> Grow!
          </h1>
          <p className="mt-12 text-xl">
            Mushrooms can be a lot of fun to grow. There is something rewarding
            about eating home grown food.
          </p>
          <div className="flex mt-6 text-xl">
            <button className="bg-HunyadiYellow text-GhostWhite rounded-xl px-4 py-2">
              Videos
            </button>
          </div>
        </div>
        <img
          className="rounded-3xl w-5/12"
          src="/Img/mushroomkit.jpg"
          alt="Halloween Grow Kits"
        />
      </div>
    </div>
  );
};

export default LandingPage;
