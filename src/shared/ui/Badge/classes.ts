import classNames from 'classnames';

export type BadgeColorsVariants = 'green' | 'blue' | 'indigo' | 'red';

type GetClassesArgs = {
  color: BadgeColorsVariants;
};

const BadgesColored = {
  green: 'bg-success-50 text-success-700',
  blue: 'bg-blue-50 text-blue-700',
  indigo: 'bg-indigo-50 text-indigo-700',
  red: 'bg-error-50 text-error-700',
};

const BadgeCore = `rounded-2xl py-0.5 px-2`;

export const getClasses = ({ color }: GetClassesArgs) => {
  return classNames(BadgeCore, BadgesColored[color]);
};
