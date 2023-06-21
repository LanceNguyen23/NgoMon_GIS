import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Modal3D from "../pages/modal3d/Modal3D";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ContactAdmin from "../pages/contact_admin/Contact-Admin";
import SignUp from "../pages/signup/SignUp";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import LoginAdmin from "../pages/login_admin/LoginAdmin";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import Modal3DAdmin from "../pages/modal3d_admin/Modal3dAdmin";

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
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <SignUp />,
        path: "/signup",
      },
      {
        element: <ForgotPassword/>,
        path: '/forgotpassword'
      },
      {
        element: <LoginAdmin/>,
        path: '/admin'
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
      {
        element: <ProtectedAdminRoute />,
        children: [
          {
            element: <ContactAdmin />,
            path: "/admin/contact_admin",
          },
          {
            element: <Modal3DAdmin />,
            path: "/admin/manage_building",
          },
        ],
      },
    ],
  },
]);
