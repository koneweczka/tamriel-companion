import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },

  { path: "/locations/:category/:areaSlug", element: <Home /> },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
