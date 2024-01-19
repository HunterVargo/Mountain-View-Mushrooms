import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Tools = () => {
  return (
    <div className="font-inter text-2xl text-EerieBlack overflow-x-hidden my-6 sm:my-0 ">
      <div className="flex justify-center">
        <div className="flex flex-wrap sm:flex-nowrap sm:my-32 items-center sm:w-maxView sm:p-20 p-6">
          <img
            className="drop-shadow-xl   sm:hidden"
            src="/Img/SporeGraphic.png"
            alt=""
          />
          <div className="text-center sm:text-left">
            <h1 className="sm:text-8xl text-5xl font-bold mb-12 mt-6 sm:mt-0">
              SporeLoad
            </h1>
            <p className="leading-relaxed">
              is a light weigh web app to help farmers clearly see regression or
              progression financially on there mushroom farm. You can think of
              it as a clean excel sheet that stores data over your sales history
              and provides you with current data in comparison with past data.
            </p>
            <div className="flex sm:justify-start justify-evenly mt-12">
              <button className="rounded-xl bg-SporeGreen p-4 shadow-xl font-semibold">
                Offical Page
              </button>
              <button className="rounded-xl bg-SporeBlue p-4 shadow-xl font-semibold sm:ml-16">
                Demo
              </button>
            </div>
          </div>
          <img
            className="drop-shadow-xl w-5/12 h-1/2 sm:block hidden"
            src="/Img/SporeGraphic.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-SporeBlue w-screen mt-24 mb-20 sm:m-0">
        <div className="flex justify-center">
          <div className=" sm:w-maxView sm:p-20 sm:my-32 my-8">
            <h2 className="sm:text-end text-center sm:text-8xl text-4xl font-semibold mb-6 ">
              How It Works
            </h2>
            <iframe
              className="rounded-2xl shadow-xl border-4 h-48 sm:w-YtW sm:h-YtH"
              src="https://www.youtube.com/embed/S5iDNXM1QRw?si=5tK4A9g4HXlI4xId"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-6 sm:p-0">
        <div className=" w-maxView sm:p-20 sm:my-32">
          <h2 className="sm:text-8xl text-4xl font-semibold py-6 text-center sm:text-left">
            Review <span className="sm:block hidden ">& Stats</span>
          </h2>
          <div className="grid sm:grid-cols-4 border-4 rounded-xl sm:p-20 p-6">
            <div className="bg-SporeGreen w-fit p-2 rounded-2xl place-self-center">
              <FaRegCircleUser className="w-20 h-20" />
            </div>
            <div className="self-center">
              <h3 className="font-bold">Hunter Vargo</h3>
              <div>stars</div>
            </div>
            <div className="col-span-2 text-center self-center font-bold mt-6 sm:mt-0">
              "Amazing App, so useful!"
            </div>
          </div>
          <div className="sm:grid grid-cols-6 gap-6 my-8 space-y-8 sm:space-y-0">
            <div className="sm:p-10 sm:py-12 p-6 text-center border-3 rounded-xl col-span-3 shadow-lg">
              <h2 className="text-SporeBlue font-bold text-5xl mb-3">
                $350,000
              </h2>
              <p className="font-semibold">Of User Sales</p>
            </div>
            <div className="sm:p-10 sm:py-12 p-6 text-center border-3 rounded-xl col-span-2 shadow-lg">
              <h2 className="text-SporeGreen font-bold text-5xl mb-3 ">
                100,000
              </h2>
              <p className="font-semibold">Pounds Sold</p>
            </div>
            <div className="sm:p-10 sm:py-12 p-6 text-center border-3 rounded-xl col-span-1 shadow-lg">
              <h2 className="text-SporeBlue font-bold text-5xl mb-3">20+</h2>
              <p className="font-semibold">Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
