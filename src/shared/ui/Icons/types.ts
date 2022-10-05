import React from 'react';

export type IconArgs = Pick<
  React.HTMLProps<SVGElement>,
  'width' | 'height' | 'className' | 'onClick'
> & {
  fill?: string;
};
