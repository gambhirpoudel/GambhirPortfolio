import React from "react";
import { name, heroDescription } from "../constants";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="" id="hero">
    <div className="flex flex-wrap">
      <div className="w-full ">
        <div className="items-center lg:items-start">
          <p className="text-green text-md font-sfMono">Hi, my name is</p>
          <h2  className="text-lightest-slate text-xxxl font-calibre font-semibold">
            {name}.
          </h2>

          <h3 className="text-xxxl font-calibre text-slate font-medium">
            I build things for the web
          </h3>

          <p className="text-xl text-slate w-[540px] font-calibre">
          {heroDescription}
          </p>
        </div>
      </div>
        <a href="https://github.com/gambhirpoudel" className="bigButton mt-10"><div>Check out projects</div> </a>
    </div>
    </section>
  );
};

export default Hero;
