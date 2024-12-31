import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import useSignIn from "./useSignIn";

const SignIn = () => {
  const {
    showPassword,
    setShowPassword,
    errors,
    control,
    handleSubmit,
    signInHandler,
  } = useSignIn();

  return (
    <Box className="bg-slate-100 pt-20 h-[100vh] flex justify-center items-center">
      <ToastContainer className="!w-96" />
      <Box>
        <Box className="w-full md:w-[450px]">
          <img
            src="https://static.priceoye.pk/images/login-header-img.svg"
            alt=""
          />
        </Box>

        <Box className="w-full md:w-[450px] bg-white p-5 rounded shadow">
          <Typography variant="h5" className="text-center">
            Sign In
          </Typography>
          <Typography className="text-center mt-2 !mb-5 text-sm">
          Enter your credentials to access your account.
          </Typography>
          <form onSubmit={handleSubmit(signInHandler)}>
            <Box className="my-3">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    size="small"
                    fullWidth
                    type="email"
                    variant="outlined"
                    placeholder="Email"
                    {...field}
                  />
                )}
              />
              <Typography color="error">{errors?.email?.message}</Typography>
            </Box>

            <Box className="my-3">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <OutlinedInput
                    size="small"
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
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
              <Typography color="error">{errors?.password?.message}</Typography>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!bg-[#48afff] !capitalize"
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
