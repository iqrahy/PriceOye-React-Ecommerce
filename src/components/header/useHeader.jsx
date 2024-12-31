import { Divider, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../slices/userSlice";

const useHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const isLoggedIn = !!user.email || !!localStorage.getItem("user");
  const userName = user.name || JSON.parse(localStorage.getItem("user"))?.name;

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={"account"}>My account</Link>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <Link to={"orders"}>Track my order</Link>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Launch a complaint</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Notifications</MenuItem>
      <Divider />
      <MenuItem
        onClick={() => {
          handleLogout();
          handleMenuClose();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  return {
    open,
    toggleDrawer,
    handleProfileMenuOpen,
    handleLogout,
    isLoggedIn,
    userName,
    renderMenu,
    menuId,
    navigate,
  };
};

export default useHeader;
