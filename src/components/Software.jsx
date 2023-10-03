import React from "react";
import Header from "./Header";

export default function SporeFlow() {
  return (
    <div className=" h-screen">
      <Header />
      <div className="flex justify-center items-center h-5/6">
        <div className="text-center">
          <img className="inline-block" src="Img/SporeLoadLogo.png" alt="" />
          <h1 className="text-2xl bold">SporeLoad Coming Soon...</h1>
        </div>
      </div>
    </div>
  );
}
