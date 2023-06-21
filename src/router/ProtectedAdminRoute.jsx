import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function ProtectedAdminRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("protectedAdmin")
  useEffect(() => {
    if (!localStorage.getItem("accessToken") || !localStorage.getItem("confirmLogin") || localStorage.getItem("role") != "admin") {
      console.log('protected route admin')
      navigate("/admin", {
        state: {
          prevPath: location.pathname
        }
      });
    }
  });
  return <Outlet />;
}
