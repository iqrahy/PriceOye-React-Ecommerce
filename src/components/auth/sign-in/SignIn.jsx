import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../slices/userSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email address.")
      .required("Email address is required."),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long."),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signInHandler = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("No user found. Please sign up first.");
      return;
    }

    if (storedUser.email !== data.email) {
      toast.error("Invalid email address.");
      return;
    }

    if (storedUser.password !== data.password) {
      toast.error("Incorrect password. Please try again.");
      return;
    }

    dispatch(
      setUser({
        name: storedUser.name,
        email: storedUser.email,
        password: storedUser.password,
      })
    );

    Swal.fire({
      title: "Successfully logged in!",
      width: "400px",
      heightAuto: false,
      padding: "10px",
      confirmButtonText: "Continue",
      customClass: {
        title: "text-lg font-semibold",
        content: "text-sm",
        confirmButton: "text-xs px-4 py-2 bg-[#48AFFF]",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });

    reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="bg-slate-100 pt-20 h-[100vh] flex justify-center items-center">
      <ToastContainer className="!w-96" />
      <Box className="w-96 bg-white p-5 rounded shadow">
        <Typography variant="h5" className="text-center mb-4">
          Sign In
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
  );
};

export default SignIn;
