import classNames from 'classnames';

export type DisplayTypes = 'block' | 'flex';
export type FlexDirectionTypes = 'row' | 'column';

const Display = {
  block: 'block',
  flex: 'flex',
};

const Direction = {
  row: 'flex-row',
  column: 'flex-column',
};

type GetClassesArgs = {
  display?: DisplayTypes;
  direction?: FlexDirectionTypes;
};

export const getClasses = ({ display = 'block', direction = 'row' }: GetClassesArgs) => {
  const isDisplayBlock = display === 'block';
  return classNames(Display[display], { [Direction[direction]]: !isDisplayBlock });
};
