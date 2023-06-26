import React from "react";
import "./MushroomCard.css"


export default function Mushcard(props){
    
    
    return(
        <div id="mcard">
            <div id="infoMContainer">
                <img className="MushroomImgCards" src={props.Img} alt="Gourmet Mushrooms" />
                <h2>{props.Mushroom}</h2>
                <p id="MushPara">{props.Description}</p>
            </div>
        </div>
    )
}