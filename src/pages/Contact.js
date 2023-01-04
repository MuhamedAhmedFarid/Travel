import React from "react";
import Hero from "../Componets/Hero";
import Image from '../images/2.jpg'
import ContactForm from "../Componets/ContactForm";
import Footer from "../Componets/Footer";
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
