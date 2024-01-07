import React from "react";

const MiniProductCard = ({ img }) => {
  return (
    <div className="bg-GhostWhite w-24 h-24 flex items-center border-2">
      <img className="drop-shadow-2xl" src={`/img/${img}`} alt="" />
    </div>
  );
};

export default MiniProductCard;
