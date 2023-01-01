import React from "react";
import Hero from "../Componets/Hero";
import Image from '../images/2.jpg'
function Contact() {
  return (
    <>
      <Hero
        cName="hero__mid"
        image={Image}
        title="About"
        btnClass="hide"
        imgstyle="backgroundStyle"
      />
    </>
  );
}

export default Contact;
