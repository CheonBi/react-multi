import { Loading } from '@/common/Loading';
import MainLayout from '@/common/MainLayout';
import Hero from '@/pages/Hero';
import Login from '@/pages/Login';
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Hero />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
