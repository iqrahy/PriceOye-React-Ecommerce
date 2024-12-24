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

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const schema = yup.object({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters long.")
      .required("Name is required."),
    email: yup
      .string()
      .email("Enter a valid email address.")
      .required("Email address is required."),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .required("Password is required."),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUpHandler = (data) => {
    
    const existingUser = JSON.parse(localStorage.getItem("user"));
  
    if (existingUser && (existingUser.email === data.email || existingUser.password === data.password)) {
      if (existingUser.email === data.email) {
        alert("An account with this email already exists. Please try logging in.");
      } else {
        alert("This password is already associated with another account. Please choose a different password.");
      }
      return;
    }
  
    localStorage.setItem("user", JSON.stringify(data));
  
 
    dispatch(setUser({ name: data.name, email: data.email, password: data.password }));
  
    alert("Account created successfully!");
    navigate("/sign-in");
    reset();
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <Box className="bg-slate-100 pt-20 h-[100vh] flex justify-center items-center">
      <Box className="w-96 bg-white p-5">
        <Typography variant="h5" className="text-center">
          Sign Up
        </Typography>
        <Typography className="text-center mt-2 mb-5 text-sm">
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
                      <IconButton onClick={togglePasswordVisibility} edge="end">
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
            className="!bg-[#48afff] !capitalize"
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
