import React from "react";
import ProductPgData from "../Data/ProductPgData";
import { Link } from "react-router-dom";

const Recipes = () => {
  const Recipes = ProductPgData.data.Recipes;

  return (
    <div className="p-6 w-full ">
      <div className="flex justify-center">
        <div>
          <h1 className="p-6 text-center text-5xl font-semibold ">
            Select Recipe
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 sm:w-maxView tab:p-20">
            {Recipes.map((recipe) => {
              return (
                <div className=" hover:rounded-3xl overflow-hidden hover:tab:font-bold rounded hover:border-Jasmine hover:border-6 shadow-lg">
                  <Link
                    className="text-bold flex justify-center items-center"
                    to={recipe.id}
                    key={recipe.id}
                  >
                    <img
                      className=""
                      src={`/Img/${recipe.Image}`}
                      alt="RecipeImage"
                    />
                    <h2 className="absolute text-3xl font-extrabold font-lilitaOne tracking-wider text-EerieBlack p-6 drop-shadow-lg">
                      {recipe.Recipe}
                    </h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
