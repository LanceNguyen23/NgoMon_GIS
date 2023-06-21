import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (!localStorage.getItem("accessToken") || !localStorage.getItem("confirmLogin") || localStorage.getItem("role") != "User") {
      console.log('protected route')
      navigate("/login", {
        state: {
          prevPath: location.pathname
        }
      });
    }
  });
  return <Outlet />;
}
