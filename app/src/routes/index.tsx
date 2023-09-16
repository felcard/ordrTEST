import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MenuPage } from '../pages/Menu/';
import { LoadingPage } from '../pages/Loading/';
import { KitchenPage } from '../pages/Kitchen/';

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
