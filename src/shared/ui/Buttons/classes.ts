import classNames from 'classnames';

const Base = 'border-0 py-2.5 w-full rounded-lg text-base font-semibold';
const Primary = 'bg-primary-600 text-white shadow-button-primary';

type GetClassesArgs = {
  primary?: boolean;
  disabled?: boolean;
};

export const getClasses = (args: GetClassesArgs) => {
  return classNames(
    Base,
    {
      [`${Primary}`]: args.primary,
    },
    'disabled:opacity-75',
  );
};
