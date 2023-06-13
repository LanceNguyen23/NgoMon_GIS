import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { getAuth } from "firebase/auth";
export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);

  const auth = getAuth();
  const open = Boolean(anchorEl);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div className="header_container">
      <div className="header_logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/ngomonweb.appspot.com/o/images%2FNgoMon.png?alt=media&token=c6ca4740-85cf-49e5-ae54-ddf3e02aa140"></img>
        <p className="header_title">NGỌ MÔN HUẾ</p>
      </div>
      <div className="header_navigation">
        <nav>
          <NavLink to="/">Trang chủ</NavLink>
          <NavLink to="/modal3d">Mô hình 3D</NavLink>
          <NavLink to="/contact">Liên hệ</NavLink>
        </nav>
      </div>
      {!localStorage.getItem("accessToken") ? (
        <button className="header_login-btn" onClick={() => navigate("/login")}>
          Đăng nhập
        </button>
      ) : (
        <>
          <Box className="header_userInfo" onClick={handleOpenMenu}>
            <Avatar alt="avatar" src={photoURL} />
            <Typography className="header_userName">{displayName}</Typography>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}
