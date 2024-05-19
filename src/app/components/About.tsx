import React from "react";
import aboutImage from "@/app/assets/about.jpg";
import {
  aboutParagraph1,
  aboutParagraph2,
  aboutParagraph3,
  aboutParagraph4,
  skills
} from "../constants";

function About() {

  return (
    <section className="py-20 text-lightest-slate" id="about">
      <div className="ml-20">
        <div className="flex items-center  space-x-4 mb-10">
          <span className="text-green font-sfMono text-lg">01.</span>
          <h2 className="font-calibre font-semibold text-heading text-lightest-slate whitespace-nowrap">
            About Me
          </h2>
          <div className="w-[350px] h-px bg-lightest-navy"></div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="text w-2/5 line-height-2 text-slate text-lg">
            <div>
              <p className="mb-4">{aboutParagraph1}</p>
              <p className="mb-4">{aboutParagraph2}</p>
              <p className="mb-4">{aboutParagraph3}</p>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: aboutParagraph4 }}
              />

              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
          <div className="flex justify-center items-start mt-[0.5rem]">
            <div className="w-80 h-80 imgg">
              <img
                src={aboutImage.src}
                alt="About me"
                className="img w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
