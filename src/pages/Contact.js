import React from "react";
import Footer from "../Componets/Footer";
import Hero from "../Componets/Hero";
import Image from '../images/2.jpg'
import ContactForm from "../Componets/ContactForm";
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
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;
