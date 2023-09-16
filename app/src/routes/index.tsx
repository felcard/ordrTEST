import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MenuPage } from '../pages';
import { LoadingPage } from '../pages';
import { KitchenPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoadingPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/kitchen',
    element: <KitchenPage />,
  },
]);
