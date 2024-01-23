import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { TbChefHat } from "react-icons/tb";

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden text-5xl sm:text-8xl">
      <Helmet>
        <title>Mountain View Mushrooms</title>
        <meta
          name="description"
          content="Gourmet mushroom farm located in north-east Pennsylvania. Find all things mushroom related here."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="flex justify-center sm:text-left text-center py-8 sm:p-0">
        <div className=" sm:flex sm:my-32 justify-between sm:w-maxView w-screen p-6 sm:p-20 ">
          <img
            className="rounded-3xl w-full shadow-xl sm:hidden "
            src="/Img/KingTCooked.jpg"
            alt="King Trumpets Cooked"
          />
          <div className=" font-inter text-EerieBlack sm:w-1/3 grid">
            <h1
              className=" font-bold sm:m-0 mt-6"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Eat More Mushrooms
            </h1>
            <p className="mt-6 text-2xl leading-10">
              Explore the freshness of gourmet produce. Elevate your culinary
              experience with top-quality selections that meet your desire for
              premium ingredients.
            </p>
            <div className="flex justify-around sm:justify-between w-full mt-6 text-2xl">
              <Link
                to={"product"}
                className="bg-HunyadiYellow shadow-xl text-GhostWhite rounded-xl sm:px-10 sm:py-6 px-2 py-3"
              >
                Mushrooms
              </Link>
              <div className="flex items-center animate-pulse">
                <TbChefHat />
                <Link to={"recipes"}>Recipes</Link>
              </div>
            </div>
          </div>
          <img
            className="rounded-3xl w-5/12 shadow-xl hidden sm:block"
            src="/Img/KingTCooked.jpg"
            alt="King Trumpets Cooked"
          />
        </div>
      </div>
      <div className="bg-Jasmine sm:py-16 sm:my-22 w-svw flex justify-center py-8 sm:p-0">
        <div className="sm:flex justify-between w-maxView sm:p-20 p-6">
          <img
            className="rounded-3xl aspect-square shadow-xl  sm:hidden"
            src="/Img/MushroomDisplay.jpg"
            alt="King Trumpets Cooked"
          />
          <img
            className="rounded-3xl w-5/12  shadow-xl hidden sm:block"
            src="/Img/MushroomDisplay.jpg"
            alt="King Trumpets Cooked"
          />
          <div className="font-inter text-EerieBlack sm:text-right text-center flex-wrap justify-end grid">
            <h1
              className="font-bold sm:m-0 mt-6"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Find Fresh Mushrooms
            </h1>
            <div className="flex sm:justify-end justify-center">
              <p className=" text-2xl w-4/5 leading-10 mt-6">
                Click on the locations for pick-up directions. For Farm Corner,
                call ahead for a scheduled pick-up. Scranton Co-op is open
                mid-July to mid-November, Monday, Wednesday, Friday, 11 AM to 4
                PM.
              </p>
            </div>

            <div className="sm:flex justify-end mt-6">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 text-2xl  sm:text-center">
                <Link
                  target="_blank"
                  to={
                    "https://www.google.com/maps/place/Vanderbeek+Farm+Rd,+Lackawaxen+Township,+PA+18428/@41.5015037,-75.1185907,17z/data=!3m1!4b1!4m6!3m5!1s0x89c4add630d7833d:0xd16485b0f89bf8a7!8m2!3d41.5014997!4d-75.1160104!16s%2Fg%2F11hzxjn222?entry=ttu"
                  }
                  className="bg-GhostWhite text-HunyadiYellow border-2 border-EerieBlack rounded-lg animate-pulse p-3 sm:w-60"
                >
                  <h2>Farm Corner</h2>
                  <p className="text-EerieBlack text-base">
                    104 Vanderbeek Farm Rd
                  </p>
                </Link>
                <Link
                  target="_blank"
                  to={
                    "https://www.google.com/maps/place/Co-Op+Farmers'+Market./@41.4047006,-75.7033908,13z/data=!4m10!1m2!2m1!1sScranton+co-op!3m6!1s0x89c4d928bb985005:0x847929508ccdf707!8m2!3d41.422282!4d-75.6624954!15sCg5TY3JhbnRvbiBjby1vcFoQIg5zY3JhbnRvbiBjbyBvcJIBDmZhcm1lcnNfbWFya2V04AEA!16s%2Fg%2F1tfrswhj?entry=ttu"
                  }
                  className="bg-GhostWhite text-HunyadiYellow border-2 border-EerieBlack rounded-lg animate-pulse p-3 sm:w-60"
                >
                  <h2>Scranton Co-Op</h2>
                  <p className="text-EerieBlack text-base">
                    900 Barring Ave, Scranton
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:text-left text-center py-8 sm:p-0">
        <div className="sm:flex sm:my-32 justify-between w-maxView sm:p-20 p-6">
          <img
            className="rounded-3xl w-full shadow-xl sm:hidden "
            src="/Img/mushroomkit.jpg"
            alt="King Trumpets Cooked"
          />
          <div className="font-inter text-EerieBlack grid">
            <h1
              className="font-bold sm:m-0 mt-6 "
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Learn To Grow!
            </h1>
            <p className="mt-12 text-2xl leading-10 sm:pr-4">
              Cultivating mushrooms can be an enjoyable and rewarding
              experience, especially when indulging in homegrown produce.
              Explore the playlist below to delve into the various aspects of
              mushroom cultivation.
            </p>
            <div className="flex item-center justify-center sm:justify-start mt-6 text-3xl">
              <Link
                to={
                  "https://www.youtube.com/watch?v=4BiOVZ2VnQ8&list=PLqb2NkRJhIoqaPikdbl4Xo7HybL4sVzo9"
                }
                className="bg-HunyadiYellow text-GhostWhite rounded-xl text-2xl sm:px-10 sm:py-6 px-8 py-3 shadow-xl"
              >
                Video Collection
              </Link>
            </div>
          </div>
          <img
            className="rounded-3xl w-5/12 shadow-xl hidden sm:block"
            src="/Img/mushroomkit.jpg"
            alt="Halloween Grow Kits"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
