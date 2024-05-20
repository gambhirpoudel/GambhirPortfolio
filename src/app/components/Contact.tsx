import React from "react";
import { email, contactDescription, name } from "../constants";

function Contact() {
  return (
    <section className="w-[80%] h-[70vh] text-center" id="contacts">
      <div className="contact">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <span className="text-green font-sfMono text-md">
            0.4 Whats Next ?
          </span>
        </div>
        <h2 className="font-calibre font-semibold text-[54.333px] text-lightest-slate whitespace-nowrap">
          Get In Touch
        </h2>
        <div className="max-w-[50%] py-10 text-xl font-calibre text-slate mx-auto mb-4">
          <p>
            {contactDescription}
          </p>
        </div>
        <a href={`mailto:${email}`} className="button w-fit mx-auto">
          Say Hello
        </a>
        <div className="mt-[18%] py-10 font-sfMono text-xxs hover:text-green text-light-slate">
          <p>Build by {name}</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
