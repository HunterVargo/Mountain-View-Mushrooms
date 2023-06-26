import React from "react";
import './LandingPage.css';
import {Helmet} from "react-helmet"
import Mushvid from "../assets/C0258_preview.mp4"
import Header from "./Header";
import Widget from "./MainWidget";

export default function LandingPage(){

    return(
        <div id="LandingContainer">
            <Helmet>
                <title>Mountain View Mushrooms</title>
                <meta 
                    name="description"
                    content="Gourmet mushroom farm located in north-east Pennsylvania. Find all things mushroom related here."
                />
               <link rel="canonical" href="/" />
            </Helmet>
            <Header />

            <div id="allContentMain">

                <div id="bodyLandingPage">
                    <video src={Mushvid} autoPlay loop muted/>    
                    <div id="TextContentLandingPage">
                        <h1 id="MVMh1">Mountain View <br/>Mushrooms</h1>
                        <p id="MVMp">Supplier of specialty mushrooms<br/> located in Northeast, PA. </p>
                        <div id="buttonDiv">
                            <button className="ButtonLanding">Mushrooms</button>
                            <button className="ButtonLanding">Culinary</button>
                        </div>
                    </div>
                    
                </div>
                <h1>Find Mushrooms Here</h1>
                <div id="MarketContainer">
                        <Widget />
                        <Widget />
                        <Widget />
                </div>
            </div>
        </div>
        
    )
}