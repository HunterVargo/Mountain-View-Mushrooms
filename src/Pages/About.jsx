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
                <h2 className="text-2xl font-bold text-center sm:text-left leading-snug text-HunyadiYellow sm:mt-3">
                  Owner of Mountain View Mushrooms
                </h2>
              </div>
              <p className=" leading-normal sm:text-left text-center">
                Four years ago, I was gifted a home grow kit that sparked my
                passion for mushroom cultivation. Growing my first cluster, I
                became captivated by the art and science behind these
                fascinating fungi.
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
            <h2 className="text-4xl font-bold text-EerieBlack mb-6 sm:text-6xl">
              First Grow Tent
            </h2>
            <h3 className="font-bold text-2xl my-6 text-HunyadiYellow">
              2020-2021
            </h3>
            <p>
              Upon mastering the cultivation of basic mushroom species, I
              recognized the need for a dedicated space to elevate my endeavors.
              Enter the grow tent – compact yet highly effective. Realizing the
              importance of safeguarding my mushroom strains from contamination,
              I established a proper lab to facilitate healthy mushroom
              production.
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
              <h2 className="text-4xl font-bold text-EerieBlack mb-6 sm:text-6xl">
                Farmers Markets
              </h2>
              <h3 className="font-bold text-2xl my-6 text-HunyadiYellow">
                2021-2022
              </h3>
              <p>
                I ventured into farmers' markets, and eventually, I established
                my own. These markets played a crucial role in expanding my
                reach and connecting with numerous incredible individuals.
                Naturally, this journey fostered many connections and
                friendships along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-Jasmine">
        <div className="sm:py-6 p-6 sm:w-maxView  ">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 flex justify-center">
              <img
                className="rounded-xl  sm:hidden p-6"
                src="/Img/biggrow.png"
                alt=""
              />
            </div>
            <div className=" rounded-xl p-6 col-span-3 sm:col-span-2 text-center sm:text-left ">
              <h2 className="text-4xl font-bold text-EerieBlack mb-6 sm:text-6xl">
                First Grow Room
              </h2>
              <h3 className="font-bold text-2xl my-6 text-HunyadiYellow">
                2022-2023
              </h3>
              <p>
                The growing demand for mushrooms has become evident, and there
                is a definite opportunity for expansion to reach more people.
                Recognizing this, I embarked on a search for a space more
                conducive to mushroom farming. Fortunately, I discovered the
                perfect location – now, I'm cultivating in a full-size bar
                equipped with heating and water facilities.
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
          <h2 className="text-4xl font-bold text-EerieBlack mb-6 sm:text-6xl">
            Story Continues...
          </h2>
          <p>
            Stay informed by following my social media channels. For any
            inquiries, don't hesitate to reach out. Grateful for the ongoing
            support—thank you! Onwards and upwards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
