import { SignInPage, SignUpPage } from 'pages';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <div>Main</div>,
    loader: () => {},
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
    loader: () => {},
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
    loader: () => {},
  },
  {
    path: '/order',
    children: [
      { path: 'create', element: <div>Order Creation</div>, loader: () => {} },
      { path: ':id/details', element: <div>Order Details</div>, loader: () => {} },
      { path: ':id/update', element: <div>Order Update</div>, loader: () => {} },
    ],
  },
];
