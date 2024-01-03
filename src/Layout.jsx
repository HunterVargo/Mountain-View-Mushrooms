import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center px-20 py-8 bg-GhostWhite">
        <div className="w-maxView">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
