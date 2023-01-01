import React from "react";
import "./destination.css";


function DestinationData(props) {
  return (
    <div className={props.className}>
      <div className="des__text">
        <h2>{props.heading}</h2>
        <p>
            {props.text}
        </p>
      </div>
      <div className="image">
        <img src={props.img1} />
        <img src={props.img2} />
      </div>
    </div>
  );
}

export default DestinationData;
