import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/antiquities',
    element: <div>Antiquities</div>,
  },
  {
    path: '/achievements',
    element: <div>Achievements</div>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
