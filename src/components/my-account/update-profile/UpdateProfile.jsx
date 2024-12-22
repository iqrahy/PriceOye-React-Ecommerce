import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";


const UpdateProfile = () => {

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {
      name: "",
      email: "",
      password: "",
    };
  });

  // Initialize react-hook-form
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  // Update the user data in localStorage and in state
  const updateProfileHandler = (data) => {
    const updatedUser = { ...user, ...data };
    localStorage.setItem("user", JSON.stringify(updatedUser)); // Update localStorage
    setUser(updatedUser); // Update local state
    reset(updatedUser); // Reset form with updated data
  };

  return (
    <Box className="h-[90vh] bg-slate-100 flex justify-center !pt-6">
    <Box className="w-full mx-3 md:mx-14 lg:w-1/2 mt-20">
      {/* Navbar */}
      <AppBar
        position="static"
        className="py-2"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar variant="dense">
          <Link to="/account" className="me-3">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
          <Typography variant="h6" component="p">
            Edit Profile
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Edit Profile Form */}
      <Box className="mt-7 bg-white p-5">
        <form onSubmit={handleSubmit(updateProfileHandler)}>
          <Box className="my-3">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Full Name"
                  {...field}
                />
              )}
            />
          </Box>

          <Box className="my-3">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  size="small"
                  type="email"
                  variant="outlined"
                  placeholder="Email"
                  {...field}
                />
              )}
            />
          </Box>

          <Box className="my-3">
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#48afff", textTransform: "none" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  </Box>
  );
};

export default UpdateProfile;
