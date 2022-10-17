import classNames from 'classnames';

type GetClassesArgs = {
  isValid: boolean;
  opened: boolean;
};

export const getClasses = ({ isValid, opened }: GetClassesArgs) => {
  const root = classNames('relative');

  const dropdown = classNames(
    'absolute  mt-2 bg-gray-50 border border-gray-300 rounded-lg transition-all',
    {
      'opacity-100 z-10': opened,
      'opacity-0 -z-10': !opened,
    },
  );
  const option = classNames(
    'px-3 py-2 rounded-lg transition-colors ease-linear cursor-pointer hover:bg-gray-100',
  );

  const labelColor = classNames({
    'text-error-700': isValid,
    'text-gray-700': !isValid,
  });

  return {
    root,
    dropdown,
    option,
    labelColor,
  };
};
