/* eslint-disable no-unused-vars */
import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import Button from "../utils/Button";

function Hero() {
  return (
    <section id="home">
      <div className="hero relative h-[65vh] w-full ">
        <div className="hero-container text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-playfair font-bold text-5xl mb-5 tracking-wide">
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              HealthAndCare{" "}
            </span>
            ?
          </h1>
          <p className="text-base italic font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            numquam deleniti temporibus non nam porro est architecto cumque, aut
            iusto, similique fugit quos consequatur aliquid. Modi deleniti
            aspernatur velit consequuntur!
          </p>
          <Button name="Check Out" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
