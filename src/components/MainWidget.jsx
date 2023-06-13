import React from "react";
import "./MainWidgetStyle.css"

export default function Widget(props){
    

    return(
        <div id="widgetBox">
            <h2>{props.market}</h2>
            <h3>{props.time}</h3>
            <p>{props.location}</p>

        </div>
    )
}
