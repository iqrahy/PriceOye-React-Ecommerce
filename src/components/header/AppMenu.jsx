import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AppMenu = (props) => {
  const { toggleDrawer, open } = props;

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300 }} role="presentation">
          {/* Top */}
          <Box className="py-10 px-3" sx={{backgroundColor:"#48AFFF"}}>
            <Box className="flex justify-between items-center pe-3">
            <img className="w-28" src="https://static.priceoye.pk/images/logo.svg" alt="" />
            <FontAwesomeIcon className="bg-slate-300 text-lg p-1 h-4 w-4 rounded-full" onClose={toggleDrawer(false)} icon={faXmark}/>
            </Box>
          </Box>

          {/* bottom */}
          <Box></Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AppMenu;
