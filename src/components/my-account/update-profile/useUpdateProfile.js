import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../../slices/userSlice";
import { useForm } from "react-hook-form";
import useScrollTo from "../../useScrollTo/useScrollTo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const useUpdateProfile = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required.")
      .min(3, "Name must be at least 3 characters long.")
      .matches(/^[a-zA-Z ,.'-]+$/, "Name can only contain letters."),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required."),
  });

  const localStorageUser = JSON.parse(localStorage.getItem("user")) || {};
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: localStorageUser.name || user.name || "",
      email: localStorageUser.email || user.email || "",
    },
    resolver: yupResolver(validationSchema),
  });

  const updateProfileHandler = (data) => {
    const updatedUser = { ...user, ...data };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    dispatch(updateUserName(updatedUser));
    reset(updatedUser);
  };

  useScrollTo();

  return { control, handleSubmit, updateProfileHandler, errors };
};

export default useUpdateProfile;
