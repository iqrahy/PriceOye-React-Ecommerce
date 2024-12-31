import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { setUser } from "../../../slices/userSlice";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import useScrollTo from "../../useScrollTo/useScrollTo";
import useSignUp from "./useSignUp";

const SignUp = () => {
  const {
    showPassword,
    control,
    handleSubmit,
    signUpHandler,
    errors,
    togglePasswordVisibility,
  } = useSignUp();

  return (
    <Box className="bg-slate-100 pt-28 lg:pt-24 h-[100vh] flex justify-center lg:items-center">
      <ToastContainer className="!w-96" />
      <Box className="px-4">
        <Box className="w-full md:w-[450px]">
          <img src="https://static.priceoye.pk/images/login-header-img.svg" alt="" />
        </Box>
        <Box className="w-full md:w-[450px] bg-white p-5">
          <Typography variant="h5" className="text-center">
            Sign Up
          </Typography>
          <Typography className="text-center !mb-5 text-sm">
            Enter your details to create an account.
          </Typography>

          <form onSubmit={handleSubmit(signUpHandler)}>
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
              <Typography color="error">{errors.name?.message}</Typography>
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
              <Typography color="error">{errors.email?.message}</Typography>
            </Box>

            <Box className="my-3">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <OutlinedInput
                    fullWidth
                    size="small"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    {...field}
                  />
                )}
              />
              <Typography color="error">{errors.password?.message}</Typography>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!bg-[#48afff] !capitalize !mt-5"
            >
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
