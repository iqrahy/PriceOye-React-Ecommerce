import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../../slices/userSlice";
import { useForm } from "react-hook-form";

const useUpdateProfile = () => {
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

  return { control, handleSubmit, updateProfileHandler };
};

export default useUpdateProfile;
