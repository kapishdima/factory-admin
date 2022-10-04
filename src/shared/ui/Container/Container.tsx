import React from 'react';
import { DisplayTypes, FlexDirectionTypes, getClasses } from './classes';

type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  display?: DisplayTypes;
  direction?: FlexDirectionTypes;
};

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  direction,
  display,
  ...attrs
}) => {
  const classes = getClasses({ direction, display });
  return <div className={classes} {...attrs}></div>;
};

export default Container;
