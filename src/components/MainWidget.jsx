import React from "react";
import "./MainWidgetStyle.css";

export default function Widget(props) {
  const styles = {
    color: props.open ? "#6BAA75" : "#FF6B6B",
  };
  return (
    <a id="atag" href={props.url}>
      <div id="widgetBox" className="min-w-fit">
        <h2 className="text-xl">{props.market}</h2>
        <h3>{props.time}</h3>
        <p>{props.location}</p>
        <div className="flex items-center justify-center">
          <div className="">
            <p style={styles} className="text-center text-2xl mt-3 font-bold">
              {props.open ? "Open" : "Closed"}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
