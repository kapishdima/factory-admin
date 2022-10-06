import React from 'react';
import { IconArgs } from './types';

type AngleDownIconProps = IconArgs;

const AngleDownIcon: React.FC<AngleDownIconProps> = ({ fill, ...htmlArgs }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" {...htmlArgs}>
      <path
        d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
        fill={fill}
      />
    </svg>
  );
};

export default AngleDownIcon;
