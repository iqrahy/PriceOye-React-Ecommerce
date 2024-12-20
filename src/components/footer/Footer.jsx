import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Footer = () => {
  return (
    <>
      <Box className="bg-[#48AFFF] py-7">
        <Box className="container mx-auto flex flex-wrap gap-3 text-center md:justify-between px-3 lg:px-8">
          <Box className="flex flex-col items-center justify-start">
            <img
              className="w-32"
              src="https://static.priceoye.pk//icons/po-footer-logo-white.svg"
              alt=""
            />
            <Box>
              <List className="!text-white text-sm">
                <ListItem>About Us</ListItem>
                <ListItem>FAQs</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Press & Blog</ListItem>
                <ListItem>Terms & Condition</ListItem>
              </List>
            </Box>
          </Box>
          <Box className="!text-white flex flex-col justify-start">
            <Typography>Customer Service</Typography>
            <List className="text-sm">
              <ListItem>Help Center</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Installments Plan</ListItem>
              <ListItem>E-Warranty Activation</ListItem>
              <ListItem>Sell on Priceoye</ListItem>
            </List>
          </Box>
          <Box className="flex flex-col items-start justify-start">
            <Typography className="text-white pb-7">
              Secure Payments Methods
            </Typography>

            <Box>
              <img
                className="w-80"
                src="	https://static.priceoye.pk/images/payment_method.svg"
                alt=""
              />
            </Box>
            <Box>
              <img
                className="w-44"
                src="	https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="bg-[#3EABFF] py-7">
        <Box className="container mx-auto px-3 lg:px-8 flex justify-between">
          <Typography className="text-white">
            Copyright © 2024 Priceoye.pk
          </Typography>
          <Box className="flex gap-1 md:gap-3">
            <img
              className="w-6 md:w-8"
              src="	https://static.priceoye.pk/images/social-youtube.svg"
              alt=""
            />
            <img
              className="w-6 md:w-8"
              src="https://static.priceoye.pk/images/social-fb.svg"
              alt=""
            />
            <img
              className="w-6 md:w-8"
              src="	https://static.priceoye.pk/images/social-instagram.svg"
              alt=""
            />
            <img
              className="w-6 md:w-8"
              src="https://static.priceoye.pk/images/tiktok.svg
"
              alt=""
            />
            <img
              className="w-6 md:w-8"
              src="https://static.priceoye.pk/images/linkedin.svg"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
