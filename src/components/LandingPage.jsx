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
                <h1 id="farmMarketTitles">Find Mushrooms Here</h1>
                <div id="MarketContainer">
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
                            time="12pm-4pm, Fri, Sat"
                            location="104 Vanderbeek Farm Rd, Hawley, PA 184285"
                        />
                </div>
                <div id="aboutme">
                    <img src="Img/AboutMeImg.png" alt="Company logos" />
                    <div>
                        <h1 id="aboutnaem">Hunter Vargo</h1>
                        <p id="Aboutpara">Owner of Mountain View Mushrooms and SporeLoad Software Tool</p>
                        <div id="aboutmebutton">About Me</div>
                    </div>

                </div>
                <div id="Media">
                    <div>
                        <h1 id="mediatitle">Media</h1>
                        <p id="mediapara">Embark on your farming journey with knowledge. Get valuable guidance and inspiration for your own farm through my free YouTube videos and Instagram content.</p>
                    </div>
                    <img id="mediaimg" src="Img/SocialMediaImg.png" alt="Youtube logo" />
                </div>
            </div>
        </div>
        
    )
}