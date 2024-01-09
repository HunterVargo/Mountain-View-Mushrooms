import React from "react";

const MiniProductCard = ({ img, getCardData, ComNum, Highlight }) => {
  return (
    <div
      id={ComNum}
      onClick={getCardData}
      className={`bg-GhostWhite w-24 h-24 flex items-center border-2 rounded-lg hover:cursor-pointer hover:animate-spin ${Highlight}`}
    >
      <img id={ComNum} className="" src={`/img/${img}`} alt="" />
    </div>
  );
};

export default MiniProductCard;
