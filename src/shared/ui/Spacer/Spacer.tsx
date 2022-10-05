import React from 'react';
import { getClasses } from './classes';

type SpacerProps = {
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
};

const Spacer: React.FC<SpacerProps> = ({ bottom, left, right, top }) => {
  const classes = getClasses({
    bottom: bottom || 0,
    left: left || 0,
    right: right || 0,
    top: top || 0,
  });

  return <span className={classes}></span>;
};

export default Spacer;
