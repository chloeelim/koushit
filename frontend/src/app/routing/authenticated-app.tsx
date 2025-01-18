import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import SidebarLayout from "@/components/layout/sidebar-layout";

import AttemptPlan from "../pages/attempt/attempt";
import AttemptPage from "../pages/attempt/page";
import AttemptRecord from "../pages/attempt/record";
import Home from "../pages/home/home";

const authenticatedAppRouter = createBrowserRouter([
  {
    element: <SidebarLayout children={<Outlet />} />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/attempts",
        children: [
          {
            path: "/attempts/:id",
            children: [
              { path: "", element: <AttemptPage /> },
              { path: "prepare", element: <AttemptPlan /> },
              { path: "record", element: <AttemptRecord /> },
            ],
          },
        ],
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

const AuthenticatedApp = () => {
  return <RouterProvider router={authenticatedAppRouter} />;
};

export default AuthenticatedApp;
