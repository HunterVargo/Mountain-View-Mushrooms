import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Footer = () => {
  const { id } = useParams();
  return (
    <>
      {!id ? (
        <div className="bg-EerieBlack sm:p-20 p-6 pb-0 sm:text-xl text-base">
          <div className="grid grid-cols-4 text-GhostWhite">
            <div className="grid sm:grid-cols-4 grid-cols-3 col-span-4 font-bold pb-4">
              <div>Company</div>
              <div>Product</div>
              <div>Resources</div>
              <div className="hidden sm:block">Follow Us</div>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-3 col-span-4 text-GhostWhite/70 gap-y-3">
              <Link to={"about"}>Mountain View Mushrooms</Link>
              <Link to={"product"}>Mushrooms</Link>
              <Link to={"/"}>Contact</Link>
              <div className="hidden sm:block">
                <div className="flex space-x-2 ">
                  <Link
                    to="https://www.instagram.com/mountain_mushrooms/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@mountainviewmushrooms71"
                    target="_blank"
                  >
                    <TfiYoutube />
                  </Link>
                </div>
              </div>
              <Link to={"software"}>SporeLoad</Link>
              <Link to={"product"}>Hardware</Link>
              <Link to={"about"}>About Us</Link>
              <div></div>
              <div></div>
              <div title="Building..." className="hover:cursor-none">
                Course
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="sm:hidden">
              <h3 className="mt-3">Follow Us</h3>
              <div className="flex space-x-2 mt-3">
                <Link
                  to="https://www.instagram.com/mountain_mushrooms/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://www.youtube.com/@mountainviewmushrooms71"
                  target="_blank"
                >
                  <TfiYoutube />
                </Link>
              </div>
            </div>
            <div className="flex col-span-4 justify-between my-10 text-GhostWhite/70 sm:mt-28 text-sm">
              <span>Copyright 2024 Mountain View Mushrooms LLC</span>
              <Link to={"privacy"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
