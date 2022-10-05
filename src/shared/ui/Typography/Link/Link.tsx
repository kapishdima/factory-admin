import React from 'react';

import { Link as Navigate } from 'react-router-dom';

type LinkProps = {
  to: string;
};

const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ to, children }) => {
  return <Navigate to={to}>{children}</Navigate>;
};

export default Link;
