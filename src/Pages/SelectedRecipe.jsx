import React from "react";
import ProductPgData from "../Data/ProductPgData";
import { useParams } from "react-router-dom";

const SelectedRecipe = () => {
  const { id } = useParams();
  const Recipes = ProductPgData.data.Recipes;
  const SelectedRecipe = id === Recipes[id - 1].id ? Recipes[id - 1] : null;
  console.log(SelectedRecipe);

  return (
    <div className="p-6">
      <div className="bg-Jasmine p-2">
        <div key={SelectedRecipe.id}>
          <h1 className="text-center font-semibold">{SelectedRecipe.Recipe}</h1>
          <img className="aspect-video " src="" alt="RecipeImage" />
          <p>{SelectedRecipe.Description}</p>
          <h2>Ingrediants</h2>
          <ol className="list-disc list-inside">
            {SelectedRecipe.Ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ol>
          <h2>Preparation</h2>
          <ol className="list-disc list-inside">
            {SelectedRecipe.Perparation.map((prep) => {
              return <li>{prep}</li>;
            })}
          </ol>
          <p>
            <span className="font-semibold">Note:</span>
            {SelectedRecipe.Note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedRecipe;
