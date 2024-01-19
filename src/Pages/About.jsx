import React from "react";

const About = () => {
  return (
    <div className=" text-2xl">
      <div className=" sm:flex justify-center">
        <div className="sm:w-maxView">
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:mt-52 p-6 sm:flex justify-center">
            <img
              className=" rounded-xl sm:hidden w-full p-6"
              src="/Img/aboutme.png"
              alt="Hunter Vargo"
            />
            <div className=" grid grid-cols-1  sm:ml-6 rounded-xl ">
              <div className="self-end mb-3">
                <h2 className="sm:text-6xl text-5xl text-center sm:text-left font-bold leading-snug text-EerieBlack  ">
                  I'm Hunter Vargo
                </h2>
                <h2 className="text-2xl font-bold text-center sm:text-left leading-snug text-HunyadiYellow ">
                  Owner of Mountain View Mushrooms
                </h2>
              </div>
              <p className=" leading-normal sm:text-left text-center">
                I started growing mushrooms four years ago, after being gifted a
                home grow kit from the store. After i grew my first cluster of
                mushrooms i was hooked.
              </p>
              <div className="sm:block hidden">
                <div className=" grid-cols-6 gap-6 my-8  sm:flex ">
                  <div className="sm:p-10 py-12 text-center  rounded-xl sm:col-span-3 shadow-lg">
                    <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">
                      4+
                    </h2>
                    <p className="font-semibold">Years Of Cultivation</p>
                  </div>
                  <div className="sm:p-10 py-12 text-center  rounded-xl sm:col-span-2 shadow-lg">
                    <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">
                      10K
                    </h2>
                    <p className="font-semibold">Pounds Sold</p>
                  </div>
                  <div className="sm:p-10 py-12 text-center  rounded-xl col-span-1 shadow-lg">
                    <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">
                      20+
                    </h2>
                    <p className="font-semibold">Acounts</p>
                  </div>
                </div>
              </div>
            </div>

            <img
              className=" rounded-xl hidden sm:block w-96 pb-10"
              src="/Img/aboutme.png"
              alt="Hunter Vargo"
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="grid sm:w-maxView sm:grid-cols-6 grid-cols-1 gap-6 my-8 p-6 sm:flex justify-center ">
          <div className="sm:p-10 py-12 text-center  rounded-xl sm:col-span-3 shadow-lg">
            <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">4+</h2>
            <p className="font-semibold">Years Of Cultivation</p>
          </div>
          <div className="sm:p-10 py-12 text-center  rounded-xl sm:col-span-2 shadow-lg">
            <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">10K</h2>
            <p className="font-semibold">Pounds Sold</p>
          </div>
          <div className="sm:p-10 py-12 text-center  rounded-xl col-span-1 shadow-lg">
            <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">20+</h2>
            <p className="font-semibold">Acounts</p>
          </div>
        </div>
      </div>
      <div className="sm:mt-32 w-svw bg-Jasmine p-6 sm:flex justify-center">
        <div className="sm:hidden ">
          <div className="grid grid-cols-2">
            <img
              className="rounded-xl col-span-1 drop-shadow-xl place-self-center"
              src="/Img/Growtent.png"
              alt=""
            />

            <img
              className="rounded-xl col-span-1 drop-shadow-xl place-self-center"
              src="/Img/Hepa.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 sm:w-maxView">
          <div className=" p-6 col-span-3 sm:col-span-2 text-center">
            <h2 className="text-4xl font-bold text-EerieBlack mb-6">
              First Grow Tent
            </h2>
            <h3 className="font-bold text-2xl my-6">2020-2021</h3>
            <p>
              After Figuring out how to grow the basic mushroom species I knew
              it was time for a real grow room.
            </p>
          </div>
          <div className="sm:block hidden">
            <div className="grid grid-cols-2">
              <img
                className="rounded-xl col-span-1 drop-shadow-xl place-self-center"
                src="/Img/Growtent.png"
                alt=""
              />
              <div></div>
              <div></div>
              <img
                className="rounded-xl col-span-1 drop-shadow-xl place-self-center"
                src="/Img/Hepa.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="sm:my-24 sm:w-maxView p-6 ">
          <div className="grid grid-cols-3 gap-6 text-center ">
            <img
              className="rounded-xl drop-shadow-xl col-span-3 sm:col-span-1 p-6"
              src="/Img/mushBox.png"
              alt=""
            />
            <div className="p-6 col-span-3 sm:col-span-2 sm:text-right">
              <h2 className="text-4xl font-bold text-EerieBlack mb-6">
                Farmers Markets
              </h2>
              <h3 className="font-bold text-2xl my-6">2021-2022</h3>
              <p>
                I started to get into framers markets. I even created my own.
                This really help me expand and meet so many amazing people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-Jasmine">
        <div className="sm:py-6 p-6 sm:w-maxView  ">
          <div className="grid grid-cols-3 gap-6">
            <img
              className="rounded-xl col-span-3 sm:hidden p-6"
              src="/Img/biggrow.png"
              alt=""
            />
            <div className=" rounded-xl p-6 col-span-3 sm:col-span-2 text-center sm:text-left ">
              <h2 className="text-4xl font-bold text-EerieBlack mb-6">
                First Grow Room
              </h2>
              <h3 className="font-bold text-2xl my-6">2022-2023</h3>
              <p>
                As i learned more about standard practice of commercial mushroom
                farming, i knew id need a lab to deal with my sterile material.
              </p>
            </div>
            <img
              className="rounded-xl hidden sm:block"
              src="/Img/biggrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="my-32 sm:w-maxView p-6 col-span-2 text-center sm:text-left">
          <h2 className="text-4xl font-bold text-EerieBlack mb-6">
            Story Continues...
          </h2>
          <p>
            To Stay up tp date follow my Social Media. Feel free to also contact
            me if you have any questions. Thank you all who support me. On Wards
            and up wards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
