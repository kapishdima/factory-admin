import React from 'react';
import {
  DisplayTypes,
  FlexDirectionTypes,
  getClasses,
  HorizontalAlignment,
  VerticalAlignment,
} from './classes';

type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  display?: DisplayTypes;
  direction?: FlexDirectionTypes;
  xAlignment?: HorizontalAlignment;
  yAlignment?: VerticalAlignment;
  width?: string;
  height?: string;
};

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  direction,
  display,
  xAlignment,
  yAlignment,
  height,
  ...props
}) => {
  const { width, className, ...htmlAttrs } = props;

  const classes = getClasses({
    direction: direction || 'row',
    display: display || 'block',
    width: width || 'w-auto',
    height: height || 'h-auto',
    xAlignment: xAlignment || 'left',
    yAlignment: yAlignment || 'top',
    customClassNames: className,
  });
  return <div className={classes} {...htmlAttrs}></div>;
};

export default Container;
