import React from "react";
import './LandingPage.css';
import { Link } from "react-router-dom";
// import Widget from './MainWidget.jsx';
import {Helmet} from "react-helmet"
import Mushvid from "../assets/C0258_preview.mp4"

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
            
            <div id="header">
                <div id="svg"></div>
                <div id="linkBox">
                    <Link className="LandPageLinks" to="/Product">Product</Link>
                    <Link className="LandPageLinks" to="/SporeFlow">Software</Link>
                    <Link className="LandPageLinks" to="/Media">Media</Link>
                </div>
            </div>  
            <div id="allContentMain">
                {/* <div id="scedualBox">
                    <h1>Farmers Markets</h1>
                   <Widget 
                        market="Scranton Co-op"
                        time="12am-6pm, Mon, Wed, Fri"
                        location="900 Barring Ave, Scranton, PA 18508"
                   />
                   <Widget
                        market="Masthope Mountain"
                        time="10am-2pm, Sun"
                        location="192 Karl Hope Blvd, Lackawaxen, PA 18435"
                   />
                   <Widget 
                        market="Vanderbeek Farm Corner"
                        time="12pm-6pm, Fri, Sat"
                        location="104 Vanderbeek Farm Rd, Hawley, PA 184285"
                   />
                
                </div> */}

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
            </div>
        </div>
        
    )
}