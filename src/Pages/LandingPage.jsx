// import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { TbChefHat } from "react-icons/tb";

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden text-5xl sm:text-8xl">
      <Helmet>
        <title>Mountain View Mushrooms</title>
        <meta
          name="description"
          content="Gourmet mushroom farm located in north-east Pennsylvania. Find all things mushroom related here."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="flex justify-center sm:text-left text-center py-8 sm:p-0">
        <div className=" sm:flex sm:my-32 justify-between sm:w-maxView w-screen p-6 sm:p-20 ">
          <img
            className="rounded-3xl w-full shadow-xl sm:hidden "
            src="/Img/KingTCooked.jpg"
            alt="King Trumpets Cooked"
          />
          <div className=" font-inter text-EerieBlack sm:w-1/3 grid">
            <h1
              className=" font-bold sm:m-0 mt-6"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Eat More Mushrooms
            </h1>
            <p className="mt-6 text-2xl leading-10">
              There is nothing better than fresh gourmet mushrooms. Mountain
              View Mushrooms is here to fulfill that desire.
            </p>
            <div className="flex justify-around sm:justify-between w-full mt-6 text-2xl">
              <button className="bg-HunyadiYellow shadow-xl text-GhostWhite rounded-xl sm:px-10 sm:py-6 px-10 py-3">
                Grow
              </button>
              <div className="flex items-center animate-pulse">
                <TbChefHat />
                <Link to={"recipes"}>Recipes</Link>
              </div>
            </div>
          </div>
          <img
            className="rounded-3xl w-5/12 shadow-xl hidden sm:block"
            src="/Img/KingTCooked.jpg"
            alt="King Trumpets Cooked"
          />
        </div>
      </div>
      <div className="bg-Jasmine sm:py-16 sm:my-22 w-svw flex justify-center py-8 sm:p-0">
        <div className="sm:flex justify-between w-maxView sm:p-20 p-6">
          <img
            className="rounded-3xl w-svw shadow-xl  sm:hidden"
            src="/Img/MushroomDisplay.jpg"
            alt="King Trumpets Cooked"
          />
          <img
            className="rounded-3xl w-5/12 shadow-xl hidden sm:block"
            src="/Img/MushroomDisplay.jpg"
            alt="King Trumpets Cooked"
          />
          <div className="font-inter text-EerieBlack sm:text-right text-center flex-wrap justify-end grid">
            <h1
              className="font-bold sm:m-0 mt-6"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Find Fresh Mushrooms
            </h1>
            <div className="flex sm:justify-end justify-center">
              <p className=" text-2xl w-4/5 leading-10 mt-6">
                There is nothing better than fresh gourmet mushrooms. Mountain
                View Mushrooms is here to fulfill that desire.
              </p>
            </div>
            <div className="flex sm:justify-end justify-center items-center mt-6 text-3xl">
              <button className="bg-EerieBlack shadow-xl text-GhostWhite rounded-xl  sm:px-10 sm:py-6 px-10 py-3">
                Locations
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:text-left text-center py-8 sm:p-0">
        <div className="sm:flex sm:my-32 justify-between w-maxView sm:p-20 p-6">
          <img
            className="rounded-3xl w-full shadow-xl sm:hidden "
            src="/Img/mushroomkit.jpg"
            alt="King Trumpets Cooked"
          />
          <div className="font-inter text-EerieBlack grid">
            <h1
              className="font-bold sm:m-0 mt-6 "
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Learn To Grow!
            </h1>
            <p className="mt-12 text-2xl leading-10">
              Cultivating mushrooms can be an enjoyable and rewarding
              experience, especially when indulging in homegrown produce.
              Explore the playlist below to delve into the various aspects of
              mushroom cultivation.
            </p>
            <div className="flex item-center justify-center sm:justify-start mt-6 text-3xl">
              <Link
                to={
                  "https://www.youtube.com/watch?v=4BiOVZ2VnQ8&list=PLqb2NkRJhIoqaPikdbl4Xo7HybL4sVzo9"
                }
                className="bg-HunyadiYellow text-GhostWhite rounded-xl  sm:px-10 sm:py-6 px-8 py-3 shadow-xl"
              >
                Video Collection
              </Link>
            </div>
          </div>
          <img
            className="rounded-3xl w-5/12 shadow-xl hidden sm:block"
            src="/Img/mushroomkit.jpg"
            alt="Halloween Grow Kits"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
