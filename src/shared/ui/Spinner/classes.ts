import classNames from 'classnames';

export type SizesVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type GetClassesArgs = {
  size: SizesVariants;
};

const Sizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-10 h-10',
  xl: 'w-64 h-64',
};

export const getClasses = ({ size }: GetClassesArgs) => {
  return classNames(Sizes[size]);
};
