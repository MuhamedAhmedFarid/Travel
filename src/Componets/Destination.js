import React from "react";
import "./destination.css";
import { mainPage } from "../data";
import DestinationData from "./DestinationData";
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you opportunity to see a lot, within a time frame</p>
        <DestinationData 
        className='first__des'
        heading='To Volcano, Batangas'
        text="One of the most iconic views in Luzon Mt. Taal boasts a volcano inside
            a lake inside as islannd.if youfancy a closer look, the hike up to the
            catater is a mere 45 minutes, and is easy enough fo beginners. Guides
            will assis you of the way.and you'll ee the pecliar environment foun
            on an active volcano, including vocanic rocks asd steam vents.The hike
            van be dusty and hot, so plan for an early morning trip, and then
            unwind with some bulalo before heading back home!"
            img1={img1}
            img2={img2}
        />
        <DestinationData 
        className='first__des-revers'
        heading='Mt.Daguldul'
        text="If you'r looking that's a little ore challenging but still good for a beginner mountaneer,heck out Mt.Daguldul in Sn Huan, Batangas. 
            You'll start your hike from th beach and pass trough tropical forest.
            differnt rock formations, and small streams. Therss's a small store halfway up the trail where ou can take a break and rink vuke juice, and throug the summit itself mat not have the best view, the breeze is fantastic."
            img1={img3}
            img2={img4}
        />
        
    </div>
  );
}

export default Destination;
