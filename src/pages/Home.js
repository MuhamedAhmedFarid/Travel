import React from "react";
import Destination from "../Componets/Destination";
import Hero from "../Componets/Hero";
import Image from "../images/12.jpg";
function Home() {
  return (
    <>
      <section className="container">
        <Hero
          cName="hero"
          image={Image}
          title="Your Journey Your Story"
          destination="Choose Your Facourite Destination."
          btnText='Travel Plane'
          url='/'
          btnClass='show'
          imgstyle='imgstyle'
        />
        <Destination/>
      </section>
    </>
  );
}

export default Home;
