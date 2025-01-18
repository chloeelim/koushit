import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import SidebarLayout from "@/components/layout/sidebar-layout";

import Attempt from "../pages/attempt/attempt";
import Home from "../pages/home/home";

const authenticatedAppRouter = createBrowserRouter([
  {
    element: <SidebarLayout children={<Outlet />} />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/attempts",
        children: [{ path: ":id", element: <Attempt /> }],
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

const AuthenticatedApp = () => {
  return <RouterProvider router={authenticatedAppRouter} />;
};

export default AuthenticatedApp;
