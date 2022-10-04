import classNames from 'classnames';

const Base = 'button';
const Primary = 'button--primary';

type GetClassesArgs = {
  primary?: boolean;
};

export const getClasses = (args: GetClassesArgs) => {
  return classNames(Base, {
    [`${Primary}`]: args.primary,
  });
};
