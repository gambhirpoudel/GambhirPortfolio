import React from 'react';
import   IconGitHub from './icons/github.jsx';
import   IconInstagram from './icons/instagram.jsx';
import IconLinkedin from './icons/linkedin.jsx';
import IconTwitter from './icons/twitter.jsx';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-[30px] ml-[19px] justify-center flex flex-col items-center space-y-6">
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
      <div className="w-px h-[90px] bg-light-slate"></div>
    </div>
  );
};

export default Sidebar;
