import { React, useEffect } from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
  console.log(location.pathname);
  return (
    <>
      <Header />
      <div className="flex justify-center sm:py-8 bg-GhostWhite font-inter text-EerieBlack">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
