import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { Button, Paper, Typography } from "@mui/material";
import AppMenu from "./AppMenu";
import { Link } from "react-router-dom";
import useHeader from "./useHeader";

const Header = () => {
  const {
    open,
    toggleDrawer,
    handleProfileMenuOpen,
    handleLogout,
    isLoggedIn,
    userName,
    renderMenu,
    menuId,
    navigate,
  } = useHeader();

  return (
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
              alt="Logo"
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
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
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
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#48afff",
                    },
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
        handleLogout={handleLogout}
      />
    </Box>
  );
};

export default Header;
