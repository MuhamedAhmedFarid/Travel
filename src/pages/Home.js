import React from "react";
import Destination from "../Componets/Destination";
import Hero from "../Componets/Hero";
import Trip from "../Componets/Trip";
import Image from "../images/12.jpg";
import Footer from "../Componets/Footer";


function Home() {
  return (
    <>
    

    
      <section className="container">
      
        <Hero
          cName="hero"
          image={Image}
          title="Your Journey Your Story"
          destination="Choose Your Favourite Destination."
          btnText='Travel Plane'
          url='/'
          btnClass='show'
          imgstyle='imgstyle'
        />
        <Destination/>
        <Trip />
        <Footer />
      </section>
      
    </>
  );
}

export default Home;
