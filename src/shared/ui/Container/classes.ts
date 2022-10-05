import classNames from 'classnames';

export type DisplayTypes = 'block' | 'flex';
export type FlexDirectionTypes = 'row' | 'column';
export type HorizontalAlignment =
  | 'justify-between'
  | 'justify-around'
  | 'center'
  | 'left'
  | 'right';

export type VerticalAlignment = 'top' | 'center' | 'bottom';

const HorizontalAlignment = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'justify-center',
  'justify-between': 'justify-between',
  'justify-around': 'justify-around',
};

const VerticalAlignment = {
  top: 'items-start',
  bottom: 'items-end',
  center: 'items-center',
};

const Display = {
  block: 'block',
  flex: 'flex',
};

const Direction = {
  row: 'flex-row',
  column: 'flex-col',
};

type GetClassesArgs = {
  display: DisplayTypes;
  direction: FlexDirectionTypes;
  xAlignment: HorizontalAlignment;
  yAlignment: VerticalAlignment;
  width: string;
  height: string;
  customClassNames?: string;
};

export const getClasses = ({
  display,
  direction,
  width,
  xAlignment,
  yAlignment,
  height,
  customClassNames,
}: GetClassesArgs) => {
  const isDisplayBlock = display === 'block';
  return classNames(customClassNames, width, height, Display[display], {
    [Direction[direction]]: !isDisplayBlock,
    [VerticalAlignment[yAlignment]]: !isDisplayBlock,
    [HorizontalAlignment[xAlignment]]: !isDisplayBlock,
  });
};
