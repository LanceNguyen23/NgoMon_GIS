import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function ProtectedRoute() {
  console.log('protected route')
  const navigate = useNavigate();
  const {confirmLogin} = useContext(AuthContext);
  useEffect(() => {
    if (!(localStorage.getItem("accessToken") && confirmLogin)) {
      navigate("/login");
    }
  });
  return <Outlet />;
}
