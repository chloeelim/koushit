import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Login from "@/app/pages/unauthenticated/login";
import UnauthenticatedLayout from "@/components/layout/unauthenticated-layout";

const unauthenticatedAppRouter = createBrowserRouter([
  {
    element: <UnauthenticatedLayout children={<Outlet />} />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);

const UnauthenticatedApp = () => {
  return <RouterProvider router={unauthenticatedAppRouter} />;
};

export default UnauthenticatedApp;
