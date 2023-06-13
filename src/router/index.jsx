import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Modal3D from "../pages/Modal3D";
import AuthProvider from "../Context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Contact />,
            path: "/contact",
          },
          {
            element: <Modal3D />,
            path: "/modal3d",
          },
        ],
      },
    ],
  },
]);
