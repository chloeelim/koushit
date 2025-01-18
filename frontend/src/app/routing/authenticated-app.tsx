import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import SidebarLayout from "@/components/layout/sidebar-layout";

const authenticatedAppRouter = createBrowserRouter([
  {
    element: <SidebarLayout children={<Outlet />} />,
    children: [
      { path: "/", element: <h1>test</h1> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

const AuthenticatedApp = () => {
  return <RouterProvider router={authenticatedAppRouter} />;
};

export default AuthenticatedApp;
