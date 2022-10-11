import classNames from 'classnames';

type GetClassesArgs = {
  rounded?: boolean;
  isActive?: boolean;
};

const CardCore =
  'transition-all transition-easy-linear select-none overflow-hidden cursor-pointer h-full';

export const getClasses = ({ rounded, isActive }: GetClassesArgs) => {
  const core = classNames(
    CardCore,
    { 'rounded-xl': rounded },
    { 'border-primary-600 border-2': isActive, 'border border-gray-200': !isActive },
  );
  const header = classNames('p-3.5 transition-all transition-easy-linear', {
    'border-primary-600 text-primary-800 border-b-2 bg-primary-50': isActive,
    'border-gray-200 text-gray-700 border-b': !isActive,
  });

  return { core, header };
};
