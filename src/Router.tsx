import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Antiquities } from './pages/Antiquities/Antiquities';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/antiquities',
    element: <Antiquities />,
  },
  {
    path: '/achievements',
    element: <div>Achievements</div>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
