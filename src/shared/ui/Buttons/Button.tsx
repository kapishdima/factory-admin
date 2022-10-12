import React from 'react';
import Container from '../Container/Container';
import Spinner from '../Spinner/Spinner';

import { getClasses } from './classes';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  text: string;
  primary?: boolean;
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ primary = true, text, loading, ...attrs }) => {
  const classes = getClasses({ primary });
  return (
    <button className={classes} disabled={loading} {...attrs}>
      {loading ? (
        <Container display="flex" yAlignment="center" xAlignment="center" className="gap-x-3">
          <Spinner />
        </Container>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
