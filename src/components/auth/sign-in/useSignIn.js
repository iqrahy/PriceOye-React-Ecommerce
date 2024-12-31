import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useScrollTo from "../../useScrollTo/useScrollTo";
import * as yup from "yup";
import { setUser } from "../../../slices/userSlice";

const useSignIn = () => {
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

  useScrollTo();

  return {
    showPassword,
    setShowPassword,
    errors,
    control,
    handleSubmit,
    signInHandler,
  };
};

export default useSignIn;
