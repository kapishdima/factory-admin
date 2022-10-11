import React from 'react';

import {
  OrderConfirmStep,
  OrderInfoStep,
  OrderSelectServiceStep,
  SignInPage,
  SignUpPage,
} from 'pages';
import { RouteObject } from 'react-router-dom';

export enum Routes {
  Main = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  Order = '/order',
  OrderCreation = '/order/create',
  OrderSelectService = '/order/services',
  OrderConfirm = '/order/confirm',
  OrderDetails = '/order/details',
  OrderUpdate = '/order/update',
}

export const routes: RouteObject[] = [
  {
    path: Routes.Main,
    element: <div>Main</div>,
    // loader: () => {},
  },
  {
    path: Routes.SignIn,
    element: <SignInPage />,
    // loader: () => {},
  },
  {
    path: Routes.SignUp,
    element: <SignUpPage />,
    // loader: () => {},
  },
  {
    path: Routes.Order,
    children: [
      {
        path: Routes.OrderCreation,
        element: <OrderInfoStep />,
        // loader: () => {}
      },
      {
        path: Routes.OrderSelectService,
        element: <OrderSelectServiceStep />,
        // loader: () => {}
      },
      {
        path: Routes.OrderConfirm,
        element: <OrderConfirmStep />,
        // loader: () => {}
      },
      {
        path: `${Routes.OrderDetails}/:id`,
        element: <div>Order Details</div>,
        // loader: () => {}
      },
      {
        path: `${Routes.OrderUpdate}/:id`,
        element: <div>Order Update</div>,
        // loader: () => {}
      },
    ],
  },
];
