import classNames from 'classnames';

type GetClassesAttrs = {
  isValid: boolean;
};

export const getInputClasses = ({ isValid }: GetClassesAttrs) => {
  const inputFocus = classNames({
    'focus:border-primary-700': isValid,
    'focus:border-error-700': !isValid,
  });
  const inputCore = classNames(
    `w-full py-2.5 px-3.5 border  rounded-lg text-base text-gray-700 font-normal shadow-input transition-colors ease-linear`,
    { 'border-gray-300': isValid, 'border-error-700': !isValid },
  );
  const inputPlaceholder = classNames(
    'placeholder:text-base placeholder:text-gray-500 placeholder:font-normal',
  );
  const input = classNames(inputCore, inputFocus, inputPlaceholder);

  return input;
};

export const getClasses = ({ isValid }: GetClassesAttrs) => {
  const container = classNames('w-full');
  const label = classNames('pb-1.5 font-medium text-sm ', {
    'text-error-700': !isValid,
    'text-gray-700': isValid,
  });

  return {
    container,
    label,
  };
};
