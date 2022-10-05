import classNames from 'classnames';

type GetClassesArgs = {
  checked: boolean;
};

export const getClasses = ({ checked }: GetClassesArgs) => {
  return classNames('checkbox', { 'checkbox--active': checked });
};
