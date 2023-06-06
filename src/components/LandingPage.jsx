import React from "react";
import './LandingPage.css';
import { Link } from "react-router-dom";
export default function LandingPage(){

    return(
        <div id="LandingContainer">
            <div id="header">
                <Link to="/Product">Product</Link>
                <Link to="/SporeFlow">Software</Link>
                <Link to="/Media">Media</Link>

            </div>
            <div id="body">
                <h1>Mountain View Mushrooms</h1>
                <h2>Eat More Mushrooms...</h2>
            </div>
        </div>
        
    )
}