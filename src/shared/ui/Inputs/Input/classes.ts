import classNames from 'classnames';

export const getInputClasses = () => {
  const inputFocus = classNames('focus:border-primary-700');
  const inputCore = classNames(
    `w-full py-2.5 px-3.5 border border-gray-300 rounded-lg text-base text-gray-700 font-normal shadow-input transition-colors ease-linear`,
  );
  const inputPlaceholder = classNames(
    'placeholder:text-base placeholder:text-gray-500 placeholder:font-normal',
  );
  const input = classNames(inputCore, inputFocus, inputPlaceholder);

  return input;
};

export const getClasses = () => {
  const container = classNames('w-full');
  const label = classNames('pb-1.5 font-medium text-sm text-gray-700');

  return {
    container,
    label,
  };
};
