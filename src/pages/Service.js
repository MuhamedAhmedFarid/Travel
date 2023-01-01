import React from "react";
import Hero from "../Componets/Hero";
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
    </>
  );
}

export default Service;
