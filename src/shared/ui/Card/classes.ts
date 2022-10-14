import classNames from 'classnames';

export type CardSizes = 'sm' | 'md';

type GetClassesArgs = {
  rounded: boolean;
  isActive: boolean;
  size: CardSizes;
};

const CardCore =
  'transition-all transition-easy-linear select-none overflow-hidden cursor-pointer ';

const CardSizes = {
  md: {
    body: 'p-4',
    header: ' p-3.5',
  },
  sm: {
    body: 'px-4 py-2',
    header: ' px-4 py-1',
  },
};

export const getClasses = ({ size, rounded, isActive }: GetClassesArgs) => {
  const core = classNames(
    CardCore,

    { 'rounded-xl': rounded },
    { 'border-primary-600 border-2': isActive, 'border border-gray-200': !isActive },
  );
  const body = classNames(CardSizes[size].body);
  const header = classNames('p-3.5 transition-all transition-easy-linear', CardSizes[size].header, {
    'border-primary-600 text-primary-800 border-b-2 bg-primary-50': isActive,
    'border-gray-200 text-gray-700 border-b': !isActive,
  });

  return { core, body, header };
};
