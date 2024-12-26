import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DeliveryDetails from "./delivery-details/DeliveryDetails";
import DeliveryType from "./delivery-type/DeliveryType";

const OrderDetailsForm = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const storedName = user?.name;
  const storedEmail = user?.email;

  const [name, setName] = useState(storedName);
  const [email, setEmail] = useState(storedEmail);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Box className="md:w-[70%] bg-white border px-4 py-6 mt-6 rounded-lg">
        <Typography className="!text-md">1. Mobile Number</Typography>
        <Box className="flex items-center gap-4 mt-4">
          <Typography className="!text-xs">03111234567</Typography>
          <Box className="flex items-center gap-1">
            <FontAwesomeIcon
              className="!text-sm !text-[#A0CB5A]"
              icon={faCircleCheck}
            />
            <Typography className="!text-xs">Verified</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="md:w-[70%] bg-white border px-4 py-6 mt-6 rounded-lg">
        <Box className="flex justify-between items-center">
          <Typography className="!text-md">2. Contact Information</Typography>
          {!isEditing && (
            <IconButton
              className="hover:!bg-transparent"
              onClick={() => setIsEditing(true)}
            >
              <FontAwesomeIcon className="text-[#48AFFF]" icon={faEdit} />
            </IconButton>
          )}
        </Box>

        {isEditing ? (
          <Box className="mt-4">
            <Box className="flex items-center gap-5">
              <TextField
                label="Full Name"
                fullWidth
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Box>
            <Button
              variant="contained"
              className="!bg-[#48AFFF] !capitalize !shadow-none !px-4 !py-2 !text-xs !mt-3"
              onClick={handleSave}
            >
              Continue
            </Button>
          </Box>
        ) : (
          <Box className="mt-4 flex items-center">
            <Box className="flex flex-col w-1/2">
              <Typography className="!text-xs !text-gray-500">
                Full Name
              </Typography>
              <Typography className="!text-sm">{name}</Typography>
            </Box>
            <Box className="flex flex-col w-1/2">
              <Typography className="!text-xs !text-gray-500">Email</Typography>
              <Typography className="!text-sm">{email}</Typography>
            </Box>
          </Box>
        )}
      </Box>

      <DeliveryDetails/>
      <DeliveryType/>
    </>
  );
};

export default OrderDetailsForm;
