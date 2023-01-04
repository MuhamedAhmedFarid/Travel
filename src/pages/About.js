import React from "react";
import AboutData from "../Componets/AboutData";
import Footer from "../Componets/Footer";
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
      <AboutData />
      <Footer/>
    </div>
  );
}

export default About;
