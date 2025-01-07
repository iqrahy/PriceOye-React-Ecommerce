import React, { useState } from "react";
import useScrollTo from "../../useScrollTo/useScrollTo";
import { setUser } from "../../../slices/userSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const useSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const schema = yup.object({
    name: yup
      .string()
      .required("Name is required.")
      .min(3, "Name must be at least 3 characters long.")
      .matches(/^[a-zA-Z ,.'-]+$/, "Name can only contain letters."),
    email: yup
      .string()
      .email("Enter a valid email address.")
      .required("Email address is required."),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .required("Password is required.")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
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

    if (
      existingUser &&
      (existingUser.email === data.email ||
        existingUser.password === data.password)
    ) {
      if (existingUser.email === data.email) {
        toast.error(
          "An account with this email already exists. Please try logging in."
        );
      } else {
        toast.error(
          "This password is already associated with another account. Please choose a different password."
        );
      }
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));

    dispatch(
      setUser({ name: data.name, email: data.email, password: data.password })
    );

    Swal.fire({
      title: "Account created successfully!",
      width: "400px",
      heightAuto: false,
      padding: "10px",
      confirmButtonText: "Go to Login",
      customClass: {
        title: "text-lg font-semibold",
        content: "text-sm",
        confirmButton: "text-xs px-4 py-2 bg-[#48AFFF]",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/sign-in");
      }
    });

    reset();
  };

  useScrollTo();

  return {
    showPassword,
    control,
    handleSubmit,
    signUpHandler,
    errors,
    togglePasswordVisibility,
  };
};

export default useSignUp;
