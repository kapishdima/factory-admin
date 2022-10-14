import classNames from 'classnames';

export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeights = '800' | '700' | '600' | '500' | '400' | 'bold' | 'normal';
export type TextAlign = 'center' | 'left' | 'right';

type GetClassesArgs = {
  size: TextSizes;
  weight: TextWeights;
  color: string;
  align: TextAlign;
};

const Sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
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

export const getClasses = ({ size, weight, color, align }: GetClassesArgs) => {
  return classNames(Sizes[size], Weights[weight], color, `text-${align}`);
};
