// icon.tsx
import React from 'react';
import {
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconStar,
  IconTwitter,
  IconCustomLogo,
} from '.';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder/>;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
      case 'CustomLogo':
        return <IconCustomLogo />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
