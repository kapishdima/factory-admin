import React from 'react';

import { Container } from 'shared/ui';
import { getClasses } from './classes';

type CardProps = {
  rounded?: boolean;
  header?: JSX.Element;
  isActive?: boolean;
};

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  rounded,
  header,
  isActive,
  children,
}) => {
  const { core, header: headerClassNames } = getClasses({ rounded, isActive });
  return (
    <Container className={core}>
      {header && <Container className={headerClassNames}>{header}</Container>}
      <Container className="p-4">{children}</Container>
    </Container>
  );
};

export default Card;
