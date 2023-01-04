import React from "react";
import Hero from "../Componets/Hero";
import Trip from "../Componets/Trip";
import Image from '../images/4.jpg'

function Service() {
  return (
    <>
      <Hero
        cName="hero__mid"
        image={Image}
        title="Service"
        btnClass="hide"
        imgstyle="backgroundStyle"
      />
      <Trip />
    </>
  );
}

export default Service;
