import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../slices/userSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    email: yup.string().email("Enter a valid email address.").required("Email address is required."),
    password: yup.string().required("Password is required.").min(8, "Password must be at least 8 characters long."),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const signInHandler = (data) => {
    
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
 
    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }
  

    if (storedUser.email !== data.email) {
      alert("Invalid email address.");
      return;
    }
  

    if (storedUser.password !== data.password) {
      alert("Incorrect password. Please try again.");
      return;
    }
  

    dispatch(setUser({ name: storedUser.name, email: storedUser.email, password: storedUser.password }));
    
    alert("Successfully logged in!");
    navigate("/"); 
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  return (
    <Box className="bg-slate-100 pt-20 h-[100vh] flex justify-center items-center">
      <Box className="w-96 bg-white p-5 rounded shadow">
        <Typography variant="h5" className="text-center mb-4">Sign In</Typography>
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
                      <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
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
  );
};

export default SignIn;
