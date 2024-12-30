import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useScrollTo from "../useScrollTo/useScrollTo";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user");
  const navigate = useNavigate();

  useScrollTo()

  if (!isLoggedIn) {
    return (
      <Box
       
        className="flex flex-col items-center justify-center gap-2 pt-7 md:pt-16 px-2 h-96 !text-center !mt-3"
      >
        <Typography variant="h4">You don't have access to this page</Typography>
        <Typography variant="body1" gutterBottom>
          We're sorry, your account does not have permission this page.
        </Typography>
        <Button
          variant="contained"
          className="!capitalize !bg-[#48AFFF]"
          onClick={() => navigate("/sign-in")}
        >
          Continue to Login
        </Button>
      </Box>
    );
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
