import { faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faHouseChimney,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const DeliveryDetails = () => {
  const [addresses, setAddresses] = useState([]); // List of addresses
  const [formData, setFormData] = useState({
    province: "",
    city: "",
    area: "",
    address: "",
    type: "Home",
  });
  const [isEditing, setIsEditing] = useState(false); // Editing mode
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveAddress = () => {
    const formattedAddress = (
      <Box className="!flex !items-center">
        <Typography className="!mr-1 !text-[#FBA338] !text-2xl !bg-slate-200 !w-8 !h-8 !rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faLocationDot} className="!w-5 !h-5" />
        </Typography>
        {`${formData.address}, ${formData.area}, ${formData.city}, ${formData.province}`}
      </Box>
    );

    setAddresses([...addresses, { ...formData, formattedAddress }]);
    setFormData({
      province: "",
      city: "",
      area: "",
      address: "",
      type: "Home",
    });
    setIsEditing(false);
  };

  const handleSelectAddress = (index) => {
    setSelectedAddressIndex(index);
  };

  return (
    <Box className="bg-white border px-4 py-6 mt-6 rounded-lg">
      <Box className="flex items-center justify-between">
        <Typography className="!text-md">3a. Delivery Information</Typography>
        {!isEditing && (
          <IconButton
            className="hover:!bg-transparent"
            onClick={() => setIsEditing(true)}
          >
            <FontAwesomeIcon className="text-[#48AFFF]" icon={faEdit} />
          </IconButton>
        )}
      </Box>

      {!isEditing ? (
        <>
          {addresses.length === 0 ? (
            <Typography className="!mt-4 !mb-6 !text-sm">
              No addresses found. Please provide your delivery details.
            </Typography>
          ) : (
            <RadioGroup
              value={selectedAddressIndex}
              onChange={(e) => handleSelectAddress(Number(e.target.value))}
            >
              {addresses.map((addr, index) => (
                <Box
                  key={index}
                  className="p-4 border border-[#FBA338] rounded-lg bg-gray-50 mt-4 flex justify-between items-center"
                >
                  <FormControlLabel
                    value={index}
                    control={<Radio size="small" className="!text-[#FBA338]" />}
                    label={
                      <Box>
                        <Typography className="!text-sm">
                          {addr.formattedAddress}
                        </Typography>
                      </Box>
                    }
                  />
                </Box>
              ))}
            </RadioGroup>
          )}
        </>
      ) : (
        <Box className="!flex !flex-col !gap-5 !mt-5">
          <Box className="flex gap-3 items-center">
            <TextField
              label="Province"
              name="province"
              size="small"
              value={formData.province}
              onChange={handleInputChange}
              className="w-1/2"
            />
            <TextField
              label="City"
              name="city"
              size="small"
              value={formData.city}
              onChange={handleInputChange}
              className="w-1/2"
            />
          </Box>
          <TextField
            label="Area"
            name="area"
            size="small"
            value={formData.area}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            size="small"
            value={formData.address}
            onChange={handleInputChange}
            fullWidth
          />
          <Box className="flex items-center gap-4">
            <Button
              variant="outlined"
              size="small"
              disabled={formData.type === "Home"}
              onClick={() => setFormData({ ...formData, type: "Home" })}
              className={`!capitalize ${
                formData.type === "Home"
                  ? "!text-[#0BB07E] !text-xs !border-[#0BB07E] !border-2"
                  : "!text-gray-500 !text-xs !border-gray-500"
              } flex items-center gap-1`}
            >
              <FontAwesomeIcon icon={faHouseChimney} className="-mt-1" /> Home
            </Button>
            <Button
              variant="outlined"
              size="small"
              disabled={formData.type === "Office"}
              onClick={() => setFormData({ ...formData, type: "Office" })}
              className={`!capitalize ${
                formData.type === "Office"
                  ? "!text-[#0BB07E] !border-[#0BB07E] !text-xs !border-2"
                  : "!text-gray-500 !text-xs !border-gray-500"
              }flex items-center gap-1`}
            >
              <FontAwesomeIcon icon={faBriefcase} className="-mt-1" />
              Office
            </Button>
          </Box>
          <Button
            variant="contained"
            size="small"
            onClick={handleSaveAddress}
            className="!bg-[#48AFFF] w-24 !capitalize !shadow-none !px-4 !py-2 !text-xs"
          >
            Continue
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DeliveryDetails;
