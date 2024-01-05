import React from "react";

const About = () => {
  return (
    <div className="px-20 w-maxView text-2xl">
      <h1 className="text-center text-8xl font-bold mt-20">My Story</h1>
      <div className="flex justify-between my-32">
        <img className="w-5/12 rounded-xl" src="/Img/KingTCooked.jpg" alt="" />
        <div className="p-6 grid grid-cols-1">
          <h2 className="text-4xl font-bold font-inter leading-snug text-HunyadiYellow">
            I’m Hunter, a Mushroom Farmer working to make sure you have
            mushrooms on your plate.
          </h2>
          <p className=" leading-normal ">
            I started growing mushrooms three years ago, after my mom got me a
            home grow kit from the store. After i grew my first cluster of
            mushrooms i was hooked.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6 my-8">
        <div className="p-10 py-12 text-center border-3 rounded-xl col-span-3 shadow-lg">
          <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">4+</h2>
          <p className="font-semibold">Years Of Cultivation</p>
        </div>
        <div className="p-10 py-12 text-center border-3 rounded-xl col-span-2 shadow-lg">
          <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">10K</h2>
          <p className="font-semibold">Pounds Sold</p>
        </div>
        <div className="p-10 py-12 text-center border-3 rounded-xl col-span-1 shadow-lg">
          <h2 className="text-HunyadiYellow font-bold text-5xl mb-3">20+</h2>
          <p className="font-semibold">Acounts</p>
        </div>
      </div>
      <div className="my-32">
        <h3 className="font-bold text-5xl">2020-2021</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="border-3 rounded-xl p-6 col-span-2 shadow-xl bg-Jasmine">
            <h2 className="text-4xl font-bold text-HunyadiYellow mb-6">
              First Grow Room
            </h2>
            <p>
              After Figuring out how to grow the basic mushroom species I knew
              it was time for a real grow room.
            </p>
          </div>
          <img
            className="rounded-xl col-span-1 shadow-xl"
            src="/Img/KingTCooked.jpg"
            alt=""
          />
          <img
            className="rounded-xl col-span-1 shadow-xl"
            src="/Img/KingTCooked.jpg"
            alt=""
          />
          <div className="border-3 rounded-xl p-6 col-span-2 shadow-xl">
            <h2 className="text-4xl font-bold text-HunyadiYellow mb-6">
              My Lab
            </h2>
            <p>
              As i learned more about standard practice of commercial mushroom
              farming, i knew id need a lab to deal with my sterile material.
            </p>
          </div>
        </div>
      </div>
      <div className="my-32">
        <h3 className="font-bold text-5xl">2021-2022</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="border-3 rounded-xl p-6 col-span-2 shadow-xl bg-Jasmine">
            <h2 className="text-4xl font-bold text-HunyadiYellow mb-6">
              Farmers Markets
            </h2>
            <p>
              I started to get into framers markets. I even created my own. This
              really help me expand and meet so many amazing people.
            </p>
          </div>
          <img
            className="rounded-xl col-span-1 shadow-xl"
            src="/Img/KingTCooked.jpg"
            alt=""
          />
          <img
            className="rounded-xl col-span-1 shadow-xl"
            src="/Img/KingTCooked.jpg"
            alt=""
          />
          <div className="border-3 rounded-xl p-6 col-span-2 shadow-xl">
            <h2 className="text-4xl font-bold text-HunyadiYellow mb-6">
              Bigger Grow Room
            </h2>
            <p>
              As i learned more about standard practice of commercial mushroom
              farming, i knew id need a lab to deal with my sterile material.
            </p>
          </div>
        </div>
      </div>
      <div className="my-32 border-3 rounded-xl p-6 col-span-2 shadow-xl bg-Jasmine">
        <h2 className="text-4xl font-bold text-HunyadiYellow mb-6">
          Story Continues...
        </h2>
        <p>
          To Stay up tp date follow my Social Media. Feel free to also contact
          me if you have any questions. Thank you all who support me. On Wards
          and up wards!
        </p>
      </div>
    </div>
  );
};

export default About;
