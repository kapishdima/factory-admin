import React from 'react';

import { getClasses, TextAlign } from './classes';
import type { TextSizes, TextWeights } from './classes';

type TextProps = {
  size?: TextSizes;
  weight?: TextWeights;
  align?: TextAlign;
  color?: string;
};

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  size,
  weight,
  color,
  align,
  ...htmlAttrs
}) => {
  const classes = getClasses({
    size: size || 'md',
    weight: weight || 'normal',
    color: color || 'text-black',
    align: align || 'left',
  });
  return (
    <span className={classes} {...htmlAttrs}>
      {children}
    </span>
  );
};

export default Text;
