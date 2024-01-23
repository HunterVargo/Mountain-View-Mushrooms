import React from "react";
import ProductPgData from "../Data/ProductPgData";
import { Link } from "react-router-dom";

const Recipes = () => {
  const Recipes = ProductPgData.data.Recipes;

  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Recipes.map((recipe) => {
          return (
            <Link
              className="bg-HunyadiYellow text-bold aspect-square flex justify-center items-center"
              to={recipe.id}
              key={recipe.id}
            >
              <img src="" alt="" />
              <h2 className="text-center">{recipe.Recipe}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
