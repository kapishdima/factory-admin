import React from 'react';

import { getClasses } from './classes';
import type { HeadingSizes, HeadingWeights } from './classes';

type HeadingProps = {
  size?: HeadingSizes;
  weight?: HeadingWeights;
  color?: string;
};

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  size,
  weight,
  color,
  ...htmlAttrs
}) => {
  const classes = getClasses({
    size: size || 'sm',
    weight: weight || 'normal',
    color: color || 'text-black',
  });
  return (
    <span className={classes} {...htmlAttrs}>
      {children}
    </span>
  );
};

export default Heading;
