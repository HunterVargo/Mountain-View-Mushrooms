import React from "react";
import "./LandingPage.css"
import { Link, useNavigate } from "react-router-dom";
export default function Header(){
    const Nav = useNavigate();

    function Home(){
        Nav("/")
    }

    return(
        <div id="header">
            <img id="logo"src="/logo.png" alt="Logo" onClick={Home}/>
            <div id="linkBox">
                <Link className="LandPageLinks" to="/Product">Product</Link>
                <Link className="LandPageLinks" to="/SporeFlow">Software</Link>
                <Link className="LandPageLinks" to="/Media">Media</Link>
            </div>
        </div>  
    )
}