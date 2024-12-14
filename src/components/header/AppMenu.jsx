import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";

const AppMenu = (props) => {
  const { toggleDrawer, open } = props;

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <Typography>Hello</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default AppMenu;
