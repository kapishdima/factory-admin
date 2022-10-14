import React from 'react';

import { Container } from 'shared/ui';
import { CardSizes, getClasses } from './classes';

type CardProps = {
  rounded?: boolean;
  header?: JSX.Element;
  isActive?: boolean;
  size?: CardSizes;
};

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  rounded,
  header,
  isActive,
  children,
  size,
}) => {
  const {
    core,
    body,
    header: headerClassNames,
  } = getClasses({
    rounded: rounded || true,
    isActive: isActive || false,
    size: size || 'md',
  });
  return (
    <Container height="h-full" className={core}>
      {header && <Container className={headerClassNames}>{header}</Container>}
      <Container className={body}>{children}</Container>
    </Container>
  );
};

export default Card;
