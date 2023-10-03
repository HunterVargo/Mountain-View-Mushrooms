import React from "react";
import "./MainWidgetStyle.css";

export default function Widget(props) {
  return (
    <a id="atag" href={props.url}>
      <div id="widgetBox" className="min-w-fit">
        <h2 className="text-xl">{props.market}</h2>
        <h3>{props.time}</h3>
        <p>{props.location}</p>
        <div className="flex items-center">
          <img
            src={`/Img/${props.open ? "OpenDot.png" : "ClosedDot.png"}`}
            alt="open or closed"
          />
          <div className="w-2/3">
            <p className="text-center text-sm">
              {props.open ? "Open" : "Closed"}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
