import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Box className="flex flex-col md:flex-row justify-between items-center px-8 lg:px-28 pt-9">
      <Box>
        <Typography sx={{fontSize:"25px", fontWeight:"600"}} className="pb-4 text-[#48AFFF]">PAGE NOT FOUND</Typography>
        <Typography variant="h6">Possible Reasons</Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Internet Connection Error." />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="The address may have been typed incorrectly." />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="It may be a broken or outdated link." />
          </ListItem>
        </List>

        <Link to={'/'}  className="group text-[#48AFFF] transition duration-300">
        Go back
        
        <span className="block max-w-0 group-hover:max-w-16 transition-all duration-500 h-0.5 bg-[#48AFFF]"></span></Link>
      </Box>

      <Box>
        <img className="w-full" src="https://static.priceoye.pk/images/404-image.svg" alt="" />
      </Box>
    </Box>
  );
};

export default Error;
