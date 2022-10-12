import classNames from 'classnames';
import React from 'react';
import { getClasses, SizesVariants } from './classes';

import './styles.scss';

type SpinnerProps = {
  size?: SizesVariants;
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'sm' }) => {
  const classes = getClasses({ size });
  return <div className={classNames(classes, 'loader')}></div>;
};

export default Spinner;
