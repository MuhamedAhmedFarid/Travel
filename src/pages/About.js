import React from "react";
import Hero from "../Componets/Hero";
import Image from "../images/night.jpg";

function About() {
  return (
    <div>
      <Hero
        cName="hero__mid"
        image={Image}
        title="About"
        btnClass="hide"
        imgstyle='backgroundStyle'
      />
    </div>
  );
}

export default About;
