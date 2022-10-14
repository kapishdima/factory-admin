import classNames from 'classnames';

export const getClasses = () => {
  const container = classNames(
    'border border-gray-200 rounded-xl py-4 px-6 cursor-pointer text-center',
  );

  return { container };
};
