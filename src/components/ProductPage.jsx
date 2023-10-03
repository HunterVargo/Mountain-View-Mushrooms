import React from "react";
// import Mushcard from "./MushroomCard";
import "./ProductPageStyling.css";
import Header from "./Header";
export default function Product() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex items-center justify-center h-5/6">
        <h1 className="text-2xl p-1 inline-block ">Product Coming Soon...</h1>
        {/* <h1 id="pagetitleSpecies">Mushroom Species</h1> */}
        {/* <div className="McardRow">
                    <Mushcard
                        Img="./Img/King Pearl Mushroom.jpg"
                        Mushroom="King Pearl Oyster"
                        Description="Softer stemmed oyster mushroom, fleshy caps and an overall denser mushroom."
                    />
                    <Mushcard
                        Img="./Img/Lions Mane Mushroom.jpg"
                        Mushroom="Lions Mane"
                        Description="Unique mushroom that grows in large clusters, has a crab like texture."
                    />
                    <Mushcard
                        Img="./Img/Pink Oyster Mushroom.jpg"
                        Mushroom="Pink Oyster"
                        Description="Very little to no stem, a tropical species, great with simple saute."
                    />
                </div>
                <div className="McardRow">
                    <Mushcard
                        Img="./Img/Shiitake Mushroom.jpg"
                        Mushroom="Shiitake"
                        Description="One of most popular mushrooms, has a great nutty taste. Stems can be hardy, caps are tender."
                    />
                </div>*/}
      </div>
    </div>
  );
}
