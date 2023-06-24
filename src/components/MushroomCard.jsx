import React from "react";
import "./MushroomCard.css"


export default function Mushcard(props){
    
    
    return(
        <div id="mcard">
            <img className="MushroomImgCards" src={props.Img} alt="KingPearl" />
            <h2>{props.Mushroom}</h2>
            <p>{props.Description}</p>
        </div>
    )
}