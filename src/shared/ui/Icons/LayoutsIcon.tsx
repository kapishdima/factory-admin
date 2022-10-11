import React from 'react';
import { IconArgs } from './types';

type LayoutsIcon = IconArgs;

const LayoutsIcon: React.FC<LayoutsIcon> = ({ ...htmlArgs }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...htmlArgs}>
      <g style={{ mixBlendMode: 'multiply' }}>
        <rect x="2" y="2" width="32" height="32" rx="16" fill="#F4EBFF" />
        <path
          d="M11.3334 19.6669L17.7615 22.8809C17.849 22.9247 17.8927 22.9465 17.9386 22.9551C17.9792 22.9628 18.0209 22.9628 18.0615 22.9551C18.1074 22.9465 18.1511 22.9247 18.2386 22.8809L24.6667 19.6669M11.3334 16.3335L17.7615 13.1195C17.849 13.0757 17.8927 13.0539 17.9386 13.0453C17.9792 13.0376 18.0209 13.0376 18.0615 13.0453C18.1074 13.0539 18.1511 13.0757 18.2386 13.1195L24.6667 16.3335L18.2386 19.5476C18.1511 19.5913 18.1074 19.6132 18.0615 19.6218C18.0209 19.6294 17.9792 19.6294 17.9386 19.6218C17.8927 19.6132 17.849 19.5913 17.7615 19.5476L11.3334 16.3335Z"
          stroke="#7F56D9"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="2" y="2" width="32" height="32" rx="16" stroke="#F9F5FF" strokeWidth="4" />
      </g>
    </svg>
  );
};

export default LayoutsIcon;
