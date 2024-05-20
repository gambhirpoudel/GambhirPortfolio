"use client";
import React, { useState } from 'react';
import { email } from '../constants';

const EmailSidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="fixed bottom-0 right-[5px] sm:flex hidden justify-center flex-col items-center space-y-0 md:flex">
      <div 
        className="w-px h-[50px] bg-light-slate"
      ></div>
      <div className="block">
        <a
          href={`mailto:${email}`}
          className="text-xxs font-sfMono transition-all duration-300 transform hover:text-green hover:-translate-y-1"
          style={{
            display: 'block',
            whiteSpace: 'nowrap',
            transform: isHovered ? 'rotate(90deg) translateX(-5px)' : 'rotate(90deg)',
            letterSpacing: '1.5px',
            height: '5px',
            marginTop: '-190px',
            marginLeft: '6px',
            color: 'var(--lightest-slate-color)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default EmailSidebar;
