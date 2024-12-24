import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AppBar,
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../../slices/userSlice";

const UpdateProfile = () => {
  const localStorageUser = JSON.parse(localStorage.getItem("user")) || {};
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: localStorageUser.name || user.name || "",
      email: localStorageUser.email || user.email || "",
    },
  });

  const updateProfileHandler = (data) => {
    const updatedUser = { ...user, ...data };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    dispatch(updateUserName(updatedUser));
    reset(updatedUser);
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <Box className=" bg-slate-100 flex justify-center pt-10 md:pt-[100px] md:pb-60 pb-14 lg:pb-40">
      <Box className="w-full mx-3 md:mx-14 lg:w-1/2 mt-20">
        <AppBar position="static" className="!bg-white !text-black">
          <Toolbar variant="dense">
            <Link to="/account" className="me-3">
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <Typography variant="h6">Edit Profile</Typography>
          </Toolbar>
        </AppBar>

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
                className="!bg-[#48afff] !capitalize"
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
