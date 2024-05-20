import React from "react";
import { name, heroDescription } from "../constants";

const Hero = () => {
  return (
    <section className="ml-2" id="hero">
      <div className="flex flex-wrap">
        <div className="w-full ">
          <div className="items-center lg:items-start">
            <p className="text-green text-xs sm:text-md font-sfMono">
              Hi, my name is
            </p>
            <h2 className="text-lightest-slate sm:text-xxxl text-heading font-calibre font-semibold">
              {name}.
            </h2>
            <h3 className="text-heading sm:text-xxxl font-calibre text-slate font-medium">
              I build things for the web
            </h3>

            <p className="text-md sm:text-xl text-slate sm:w-[540px] w-[315px] font-calibre">
              {heroDescription}
            </p>
          </div>
        </div>
        <a
          href="/gambhir.pdf"
          className="smallButton mt-10 sm:hidden"
        >
          <div>Download Resume</div>
        </a>
        <a
          href="https://github.com/gambhirpoudel"
          className="bigButton mt-10 hidden sm:block"
        >
          <div>Check out projects</div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
