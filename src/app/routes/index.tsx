import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Suspense } from 'react';

const routes = createBrowserRouter(router);
export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};