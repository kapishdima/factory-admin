import React from 'react';
import { Container, Text } from 'shared/ui';
import { BadgeColorsVariants, getClasses } from './classes';

type BadgeProps = {
  color: BadgeColorsVariants;
  children: string;
};

const Badge: React.FC<BadgeProps> = ({ color, children }) => {
  const classes = getClasses({ color });
  return (
    <Container className={classes} display="flex" xAlignment="center" yAlignment="center">
      <Text size="xs" weight="500" color="inherit">
        {children}
      </Text>
    </Container>
  );
};

export default Badge;
