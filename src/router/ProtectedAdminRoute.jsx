import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function ProtectedAdminRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("protectedAdmin")
  useEffect(() => {
    if (!localStorage.getItem("accessToken") || !localStorage.getItem("confirmLogin")) {
      console.log('protected route admin')
      navigate("/admin", {
        state: {
          previousUrl: location.pathname
        }
      });
    }
  });
  return <Outlet />;
}
