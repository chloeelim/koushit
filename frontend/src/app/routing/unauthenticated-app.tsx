import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Login from "@/app/pages/unauthenticated/login";
import Register from "@/app/pages/unauthenticated/register";

const unauthenticatedAppRouter = createBrowserRouter([
  {
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <Navigate to="/login" replace /> },
    ],
  },
]);

const UnauthenticatedApp = () => {
  return <RouterProvider router={unauthenticatedAppRouter} />;
};

export default UnauthenticatedApp;
