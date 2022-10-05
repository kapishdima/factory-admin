import React from 'react';

import { getClasses } from './classes';
import type { TextSizes, TextWeights } from './classes';

type TextProps = {
  size?: TextSizes;
  weight?: TextWeights;
  color?: string;
};

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  size,
  weight,
  color,
  ...htmlAttrs
}) => {
  const classes = getClasses({
    size: size || 'md',
    weight: weight || 'normal',
    color: color || 'text-black',
  });
  return (
    <span className={classes} {...htmlAttrs}>
      {children}
    </span>
  );
};

export default Text;
