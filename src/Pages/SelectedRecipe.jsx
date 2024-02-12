import React, { useEffect, useRef, useState } from "react";
import ProductPgData from "../Data/ProductPgData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { IoPrint } from "react-icons/io5";
const SelectedRecipe = () => {
  const { id } = useParams();
  const Recipes = ProductPgData.data.Recipes;
  const SelectedRecipe = id === Recipes[id - 1].id ? Recipes[id - 1] : null;
  const [printStyle, setPrintStyle] = useState(true);
  const isPrintable = useRef(false);

  function togglePrintStyles() {
    setPrintStyle(false);
    isPrintable.current = true;
  }
  useEffect(() => {
    if (isPrintable.current) {
      isPrintable.current = false;
      window.print();
      if (window.innerWidth <= 768) {
        setTimeout(() => setPrintStyle(true), 7000); // this is to help mobile devices print the page without buttons on the recipe sheet. Gives time for device to render print correct print out style.
      } else {
        setPrintStyle(true);
      }
    }
  }, [printStyle]);

  return (
    <>
      <div className="p-6">
        <div className="bg-Jasmine p-6 tab:p-10">
          <div key={SelectedRecipe.id}>
            <div
              className={`flex justify-evenly tab:justify-start ${
                printStyle ? null : "hidden"
              }`}
            >
              <div className="bg-HunyadiYellow tab:w-10 h-10 w-1/4 rounded-3xl flex justify-center items-center hover:text-3xl hover:tab:w-12 hover:tab:h-12 tab:fixed">
                <Link
                  className="w-full flex justify-center"
                  to=".."
                  relative="path"
                >
                  <AiOutlineRollback />
                </Link>
              </div>
              <div className="bg-HunyadiYellow tab:w-10 h-10 w-1/4 rounded-3xl flex justify-center items-center hover:text-3xl hover:tab:w-12 hover:tab:h-12 tab:fixed tab:ml-14 relative ">
                <button
                  onClick={() => togglePrintStyles()}
                  className="w-full flex justify-center"
                >
                  <IoPrint />
                </button>
              </div>
            </div>

            <h1 className="text-center font-semibold text-5xl my-6">
              {SelectedRecipe.Recipe}
            </h1>

            <p className="text-2xl">{SelectedRecipe.Description}</p>
            <h2 className="text-2xl font-semibold my-6">Ingrediants</h2>
            <ol className="list-disc list-inside text-2xl">
              {SelectedRecipe.Ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </ol>
            <h2 className="text-2xl font-semibold my-6">Preparation</h2>
            <ol className="list-disc list-inside text-2xl">
              {SelectedRecipe.Preparation.map((prep, index) => {
                return <li key={index}>{prep}</li>;
              })}
            </ol>
            <p className="text-2xl my-6">
              <span className="font-semibold text-2xl">Note:</span>
              {SelectedRecipe.Note}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedRecipe;
