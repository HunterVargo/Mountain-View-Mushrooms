import React from "react";
import "./LandingPage.css"
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <div id="header">
            <div id="svg"></div>
            <div id="linkBox">
                <Link className="LandPageLinks" to="/Product">Product</Link>
                <Link className="LandPageLinks" to="/SporeFlow">Software</Link>
                <Link className="LandPageLinks" to="/Media">Media</Link>
                </div>
        </div>  
    )
}