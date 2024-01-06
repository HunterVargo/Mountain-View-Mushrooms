import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Tools = () => {
  return (
    <div className="font-inter w-maxView text-2xl p-20 text-EerieBlack">
      <div className="flex my-32 ">
        <div>
          <h1 className="text-8xl font-bold mb-12 ">SporeLoad</h1>
          <p className="leading-relaxed ">
            is a light weigh web app to help farmers clearly see regression or
            progression financially on there mushroom farm. You can think of it
            as a clean excel sheet that stores data over your sales history and
            provides you with current data in comparison with past data.
          </p>
          <div className="felx mt-12">
            <button className="rounded-xl bg-SporeGreen p-4 shadow-xl font-semibold">
              Offical Page
            </button>
          </div>
        </div>
        <img className="drop-shadow-xl" src="/Img/SporeGraphic.png" alt="" />
      </div>
      <div className="my-32">
        <h2 className="text-end text-8xl font-semibold mb-6 ">How It Works</h2>
        <iframe
          className="rounded-2xl shadow-xl"
          width="1122"
          height="631.89"
          src="https://www.youtube.com/embed/S5iDNXM1QRw?si=5tK4A9g4HXlI4xId"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="my-32">
        <h2 className="text-8xl font-semibold py-6">Review & Stats</h2>
        <div className="grid grid-cols-4 border-4 rounded-xl p-20">
          <div className="bg-SporeGreen w-fit p-2 rounded-2xl place-self-center">
            <FaRegCircleUser className="w-20 h-20" />
          </div>
          <div className="self-center">
            <h3 className="font-bold">Patrick D</h3>
            <div>stars</div>
          </div>
          <div className="col-span-2 text-center self-center font-bold">
            "Amazing App, so useful!"
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 my-8">
          <div className="p-10 py-12 text-center border-3 rounded-xl col-span-3 shadow-lg">
            <h2 className="text-SporeBlue font-bold text-5xl mb-3">$350,000</h2>
            <p className="font-semibold">Of User Sales</p>
          </div>
          <div className="p-10 py-12 text-center border-3 rounded-xl col-span-2 shadow-lg">
            <h2 className="text-SporeGreen font-bold text-5xl mb-3">100,000</h2>
            <p className="font-semibold">Pounds Sold</p>
          </div>
          <div className="p-10 py-12 text-center border-3 rounded-xl col-span-1 shadow-lg">
            <h2 className="text-SporeBlue font-bold text-5xl mb-3">20+</h2>
            <p className="font-semibold">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
