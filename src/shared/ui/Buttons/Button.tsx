import React from 'react';

import { getClasses } from './classes';
import './style.scss';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  primary?: boolean;
  type?: 'submit' | 'reset' | 'button';
  text: string;
};

const Button: React.FC<ButtonProps> = ({ primary = true, text, ...attrs }) => {
  const classes = getClasses({ primary });
  return (
    <button className={classes} {...attrs}>
      {text}
    </button>
  );
};

export default Button;
