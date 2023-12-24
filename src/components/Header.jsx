import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-GhostWhite text-EerieBlack justify-between items-end">
      <div className="font-lilitaOne text-HunyadiYellow text-4xl">MVM</div>
      <div className="space-x-16 font-inter">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Product</Link>
        <Link to={"/"}>Tools</Link>
        <Link className="text-HunyadiYellow" to={"/"}>
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
