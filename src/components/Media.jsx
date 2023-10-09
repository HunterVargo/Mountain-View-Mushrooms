import React from "react";
import Header from "./Header";

export default function Media() {
  return (
    <div>
      <Header />
      <div className="flex p-10">
        <div>
          <h1 className=" text-3xl font font-title overflow-hidden">
            Want to Grow Mushrooms?
          </h1>
          <p className="text-base font-para">
            Beginning with minimal resources and knowledge, I've spent four
            years building my expertise in mushroom farming. Today, I work with
            over 25 restaurants and multiple farmers' markets each week. I'm
            here to share what I've learned and assist you with your mushroom
            farming journey through paid mobile video and audio calls. Let's
            connect, discuss your challenges, and grow together.
          </p>
          <p className="text-base font-para mt-4">
            Hunter Vargo
            <br />
            570-576-7467
            <br />
            mycomushroom20@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
