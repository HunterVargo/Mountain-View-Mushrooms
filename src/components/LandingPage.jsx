import React from "react";
import './LandingPage.css';
import { Link } from "react-router-dom";
import Widget from './MainWidget.jsx';
export default function LandingPage(){

    return(
        <div id="LandingContainer">
            
            <div id="header">
                <div id="svg"></div>
                <div id="linkBox">
                    <Link className="LandPageLinks" to="/Product">Product</Link>
                    <Link className="LandPageLinks" to="/SporeFlow">Software</Link>
                    <Link className="LandPageLinks" to="/Media">Media</Link>
                </div>
            </div>
            <div id="allContentMain">
                <div id="scedualBox">
                   <Widget />
                   <Widget />
                   <Widget />
                   <Widget />
                   <Widget />
                
                </div>

                <div id="bodyLandingPage">    
                    <div id="TextContentLandingPage">
                        <h1 id="MVMh1">Mountain View <br/>Mushrooms</h1>
                        <p id="MVMp">Supplier of specialty mushrooms<br/> located in Northeast, PA. </p>
                        <div id="buttonDiv">
                            <button className="ButtonLanding">Mushrooms</button>
                            <button className="ButtonLanding">Culinary</button>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        
    )
}