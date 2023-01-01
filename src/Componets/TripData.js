import React from "react";
import './trip.css'
import Fade from 'react-reveal/Fade';

function TripData(props) {
  return (
    <Fade bottom>

    
    <div className="t-card">
        <div className="t-image">
            <img src={props.img} />
        </div>
        <div className="card__content">
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    </div>
    </Fade>
  );
}

export default TripData;
