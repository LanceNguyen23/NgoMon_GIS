import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Modal3D from "../pages/modal3d/Modal3D";

// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = () => {
    return <Outlet/>
}

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
    {
        element: <AuthLayout/>,
        children: [
            {
                element: <Login/>,
                path: '/login'
            },
            {
                element: <Home/>,
                path: "/"
            },
            {
                element: <Contact/>,
                path: "/contact"
            },
            {
                element: <Modal3D/>,
                path: "/modal3d"
            },
        ]
    }
])