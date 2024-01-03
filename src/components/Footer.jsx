import React from "react";

const Footer = () => {
  return (
    <div className="bg-EerieBlack p-20 pb-0">
      <div className="grid grid-cols-4 text-GhostWhite">
        <div className="grid grid-cols-4 col-span-4 font-bold pb-4">
          <div>Company</div>
          <div>Product</div>
          <div>Resources</div>
          <div>Follow Us</div>
        </div>
        <div className="grid grid-cols-4 col-span-4 text-GhostWhite/70 gap-y-3">
          <div>Mountain View Mushrooms</div>
          <div>Mushrooms</div>
          <div>Contact</div>
          <div></div>
          <div>SporeLoad</div>
          <div>SporeLoad</div>
          <div>SporeLoad</div>
          <div></div>
          <div></div>
          <div>Course</div>
          <div>Videos</div>
          <div></div>
        </div>
        <div className="flex col-span-4 justify-between my-10 text-GhostWhite/70  text-sm">
          <span>Copyright 2024 Mountain View Mushrooms LLC</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
