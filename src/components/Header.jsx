import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();
  console.log(!id);

  return (
    <>
      {!id ? (
        <div className="sm:flex bg-EerieBlack text-GhostWhite justify-between items-end sm:px-10 py-8 ">
          <div className="text-center font-lilitaOne text-HunyadiYellow text-4xl">
            MVM
          </div>

          <div className="flex  justify-center w-full sm:w-fit mt-6 sm:ml-6 px-6">
            <nav className="sm:space-x-10 font-inter w-full flex justify-between">
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : null)}
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : null)}
                to={"/product"}
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : null)}
                to={"/software"}
              >
                Software
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : null)}
                style={{ color: "#ECA72C" }}
                to={"/about"}
              >
                About Me
              </NavLink>
            </nav>
          </div>
        </div>
      ) : (
        <Link to=".." relative="path">
          Back button
        </Link>
      )}
    </>
  );
};

export default Header;
