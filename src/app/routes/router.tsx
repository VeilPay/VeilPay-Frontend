import { RouteObject } from 'react-router';
import { PathNames } from '../../shared/config';
import { AuthLayout, MainLayout, RootLayout } from '../layouts';
import { LoginPage } from '../../pages/auth';

export const router: RouteObject[] = [
  {
    path: PathNames.root,
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <p>Home</p>,
          },
        ],
      },
      {
        path: PathNames.auth,
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  //? 404 page ↓
  {
    path: '*',
    element: <p>Not found page</p>,
  },
];
