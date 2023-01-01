import React from "react";
import Footer from "../Componets/Footer";
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
      <Footer />
    </>
  );
}

export default Contact;
