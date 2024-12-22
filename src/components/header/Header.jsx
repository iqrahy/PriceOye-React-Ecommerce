import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { Button, Divider, Menu, Paper, Typography } from "@mui/material";
import AppMenu from "./AppMenu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/userSlice";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user); // Redux store se user ka data le rahe hain
  const isLoggedIn = !!user.email || !!localStorage.getItem("user");
  const userName = user.name || (JSON.parse(localStorage.getItem("user"))?.name);

  const handleLogout = () => {
    // Logout karte waqt Redux action ko dispatch karna
    dispatch(logout());
  };

  // const handleLogout = () => {
  //   // Logout karte waqt Redux action ko dispatch karna
  //   dispatch(logout());
  // };

  // useEffect(() => {
  //   const fetchUser = () => {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       try {
  //         const parsedUser = JSON.parse(storedUser);
  //         if (parsedUser && parsedUser.fullName) {
  //           setIsLoggedIn(true);
  //           setUserName(parsedUser.fullName);
  //         }
  //       } catch (error) {
  //         console.error("Error parsing user data from localStorage:", error);
  //         setIsLoggedIn(false);
  //       }
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   setIsLoggedIn(false);
  //   navigate("/");
  // };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setAnchorEl(newOpen ? null : anchorEl);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Link to={"account"}>My account</Link>
      </MenuItem>
      <Divider />
      <MenuItem>Track my order</MenuItem>
      <Divider />
      <MenuItem>Launch a complaint</MenuItem>
      <Divider />
      <MenuItem>Notifications</MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          className="py-2"
          sx={{ backgroundColor: "#48afff" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <FontAwesomeIcon icon={faBars} onClick={toggleDrawer(true)} />
            </IconButton>
            <Link to={"/"}>
              <img
                className="w-40"
                src="https://static.priceoye.pk/images/logo.svg"
                alt=""
              />
            </Link>
            <Box className="flex justify-center items-center h-full w-full">
              <Paper
                component="form"
                className="flex justify-center items-center ml-2"
              >
                <InputBase
                  className="md:w-96 px-4"
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <FontAwesomeIcon
                    className="text-[#48afff]"
                    icon={faMicrophone}
                  />
                </IconButton>
              </Paper>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className="flex items-center"
            >
              {isLoggedIn ? (
                <Box className="flex items-center gap-2">
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onMouseOver={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faCircleUser} />
                  </IconButton>
                  {userName && (
                    <Typography className="w-20">{userName}</Typography>
                  )}
                </Box>
              ) : (
                <Box className="flex gap-2">
                  <Button
                    className="w-28 h-10"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "white",
                      color: "#48afff",
                      border: "1px solid #48afff",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "white",
                        border: "1px solid white",
                      },
                      paddingX: 2,
                      paddingY: 1,
                    }}
                    onClick={() => navigate("sign-in")}
                  >
                    Log in
                  </Button>
                  <Button
                    className="w-28 h-10"
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid white",
                      "&:hover": { backgroundColor: "white", color: "#48afff" },
                      paddingX: 2,
                      paddingY: 1,
                    }}
                    onClick={() => navigate("sign-up")}
                  >
                    Register
                  </Button>
                </Box>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        {renderMenu}
        <AppMenu
          open={open}
          toggleDrawer={toggleDrawer}
          isLoggedIn={isLoggedIn}
          navigate={navigate}
          // setIsLoggedIn={setIsLoggedIn}
        />
      </Box>
    </>
  );
};

export default Header;
