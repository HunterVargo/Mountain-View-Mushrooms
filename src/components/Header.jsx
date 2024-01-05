import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-EerieBlack text-GhostWhite justify-between items-end px-20 py-8 ">
      <div className="font-lilitaOne text-HunyadiYellow text-4xl">MVM</div>
      <nav className="space-x-16 font-inter">
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
          Product
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold" : null)}
          to={"/tools"}
        >
          Tools
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
  );
};

export default Header;
