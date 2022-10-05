import classNames from 'classnames';

export type HeadingSizes = 'sm' | 'md' | 'xs';
export type HeadingWeights = '800' | '700' | '600' | '500' | '400' | 'bold' | 'normal';

type GetClassesArgs = {
  size: HeadingSizes;
  weight: HeadingWeights;
  color: string;
};

const Sizes = {
  xs: 'test-xs',
  sm: 'text-3xl',
  md: 'text-base',
};

const Weights = {
  '800': 'font-extrabold',
  '700': 'font-bold',
  '600': 'font-semibold',
  '500': 'font-medium',
  '400': 'font-normal',
  bold: 'font-bold',
  normal: 'font-normal',
};

export const getClasses = ({ size, weight, color }: GetClassesArgs) => {
  return classNames(Sizes[size], Weights[weight], color);
};
