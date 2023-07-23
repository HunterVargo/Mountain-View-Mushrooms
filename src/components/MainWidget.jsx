import React from "react";
import "./MainWidgetStyle.css"

export default function Widget(props){

    return(
        <a id="atag" href={props.url}>
            <div id="widgetBox">
            
                <h2>{props.market}</h2>
                <h3>{props.time}</h3>
                <p>{props.location}</p>
            </div>
        </a>
    )
}
