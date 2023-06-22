import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Logo from '../../assets/img/Logo.png';
export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const confirmLogin = localStorage.getItem("confirmLogin");

  const open = Boolean(anchorEl);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = async() => {
    localStorage.clear();
    navigate('/login', {
      state: {
        prevPath: location.pathname
      }
    })
  };
  useEffect(()=>{

  },[confirmLogin])
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
      {(!localStorage.getItem("accessToken") || !localStorage.getItem("confirmLogin") || localStorage.getItem("role")!="User") ? (
        <button className="header_login-btn" onClick={() => navigate("/login")}>
          Đăng nhập
        </button>
      ) : (
        <>
          <Box className="header_userInfo" onClick={handleOpenMenu}>
            <Avatar alt="avatar"/>
            <Typography className="header_userName">{localStorage.getItem("userName")}</Typography>
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
