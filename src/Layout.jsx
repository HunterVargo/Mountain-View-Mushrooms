import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center py-8 bg-GhostWhite font-inter text-EerieBlack">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
