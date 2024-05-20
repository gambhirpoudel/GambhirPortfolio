"use client";
import React, { useEffect, useState } from 'react';
import IconGitHub from './icons/github.jsx';
import IconInstagram from './icons/instagram.jsx';
import IconLinkedin from './icons/linkedin.jsx';
import IconTwitter from './icons/twitter.jsx';
import IconMenu from './icons/menu.jsx';

const Sidebar: React.FC = () => {

  return (
    <div className="hidden fixed bottom-0 left-8 ml-5 justify-center sm:flex flex-col items-center space-y-6">
      <a href="https://www.instagram.com/thegambhirpoudel/" target="_blank" rel="noopener noreferrer" className="h-5 w-5 hover:text-green transition-all duration-300 transform hover:-translate-y-1">
        <IconInstagram />
      </a>
      <a href="https://github.com/gambhirpoudel" target="_blank" rel="noopener noreferrer" className="h-5 w-5 hover:text-green transition-all duration-300 transform hover:-translate-y-1">
        <IconGitHub />
      </a>
      <a href="https://x.com/gambhirpoudel" target="_blank" rel="noopener noreferrer" className="h-5 w-5 hover:text-green transition-all duration-300 transform hover:-translate-y-1">
        <IconTwitter />
      </a>
      <a href="https://www.linkedin.com/in/gambhirpoudel/" target="_blank" rel="noopener noreferrer" className="h-5 w-5 hover:text-green transition-all duration-300 transform hover:-translate-y-1">
        <IconLinkedin />
      </a>
      <a href="https://www.linkedin.com/in/gambhirpoudel/" target="_blank" rel="noopener noreferrer" className="h-5 w-5 hover:text-green transition-all duration-300 transform hover:-translate-y-1">
        <IconMenu  />
      </a>
      <div className="w-0.5 h-20 bg-slate"></div>
    </div>
  );
};

export default Sidebar;
