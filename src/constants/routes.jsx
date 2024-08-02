import { HomePage } from '../pages/HomePage';
import { Layout } from '../layout/Layout';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];
