import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { getAuth } from "firebase/auth";
import Logo from '../../assets/img/Logo.png';
export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const auth = getAuth();
  const open = Boolean(anchorEl);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = async() => {
    await auth.signOut();
    navigate('/login')
  };
  return (
    <div className="header_container">
      <div className="header_logo" onClick={()=>navigate("/")}>
        <img src={Logo}></img>
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
            <Avatar alt="avatar" src={user.user.photoURL} />
            <Typography className="header_userName">{user.user.displayName}</Typography>
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
