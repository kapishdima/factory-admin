import React from 'react';

import {
  OrderConfirmStep,
  OrderInfoStep,
  OrderSelectServiceStep,
  SignInPage,
  SignUpPage,
} from 'pages';
import { RouteObject } from 'react-router-dom';
import { getServices } from 'entities/order';
import { Protected } from './Protected';
import ErrorBoundary from 'app/errors';

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
  },
  {
    path: Routes.SignIn,
    element: <SignInPage />,
  },
  {
    path: Routes.SignUp,
    element: <SignUpPage />,
  },
  {
    path: Routes.Order,
    children: [
      {
        path: Routes.OrderCreation,
        element: (
          <Protected>
            <OrderInfoStep />
          </Protected>
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: Routes.OrderSelectService,
        element: (
          <Protected>
            <OrderSelectServiceStep />
          </Protected>
        ),
        loader: async () => {
          return getServices();
        },
        errorElement: <ErrorBoundary />,
      },
      {
        path: Routes.OrderConfirm,
        element: (
          <Protected>
            <OrderConfirmStep />
          </Protected>
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: `${Routes.OrderDetails}/:id`,
        element: <div>Order Details</div>,
      },
      {
        path: `${Routes.OrderUpdate}/:id`,
        element: <div>Order Update</div>,
      },
    ],
  },
];
