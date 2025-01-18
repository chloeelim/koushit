import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Login from "@/app/pages/unauthenticated/login";

const unauthenticatedAppRouter = createBrowserRouter([
  {
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
