import classNames from 'classnames';

type GetClassesArgs = {
  bottom: number;
  top: number;
  left: number;
  right: number;
};

export const getClasses = ({ bottom, top, left, right }: GetClassesArgs) => {
  return `pt-${top} pb-${bottom} pr-${right} pl-${left}`;
};
