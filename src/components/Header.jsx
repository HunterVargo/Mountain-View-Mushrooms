import React from "react";
import "./LandingPage.css"
import { Link } from "react-router-dom";
// import logo from "./public/logo.png"
export default function Header(){

    return(
        <div id="header">
            <img id="logo"src="/logo.png" alt="Logo" />
            <div id="linkBox">
                <Link className="LandPageLinks" to="/Product">Product</Link>
                <Link className="LandPageLinks" to="/SporeFlow">Software</Link>
                <Link className="LandPageLinks" to="/Media">Media</Link>
                </div>
        </div>  
    )
}