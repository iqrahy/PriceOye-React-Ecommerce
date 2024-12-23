import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRightToBracket,
  faFileInvoice,
  faLocationDot,
  faMobileAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";

const AppMenu = (props) => {
  const { toggleDrawer, open, isLoggedIn, navigate, setIsLoggedIn, handleLogout } = props;

  const list = [
    {
      id: 1,
      description: "Best Mobiles Under 10000",
    },
    {
      id: 2,
      description: "Best Mobiles Under 15000",
    },
    {
      id: 3,
      description: "Best Mobiles Under 20000",
    },
    {
      id: 4,
      description: "Best Mobiles Under 30000",
    },
    {
      id: 5,
      description: "Best Mobiles Under 40000",
    },
    {
      id: 6,
      description: "Best Mobiles Under 50000",
    },
    {
      id: 7,
      description: "Best Mobiles Under 60000",
    },
    {
      id: 8,
      description: "Best Mobiles Under 80000",
    },
    {
      id: 9,
      description: "Best Mobiles Under 100000",
    },
    {
      id: 10,
      description: "Best 5G Phones",
    },
    {
      id: 11,
      description: "Best Camera Phones",
    },
    {
      id: 12,
      description: "Best Selfie Camera Phones",
    },
    {
      id: 13,
      description: "Best PUBG Mobiles",
    },
    {
      id: 14,
      description: "Most Expensive Phones",
    },
    {
      id: 15,
      description: "Top 10 Fast Charging Mobiles",
    },
    {
      id: 16,
      description: "Best Mobiles of 2023",
    },
  ];

  return (
    <>
      <Drawer open={open}>
        <Box sx={{ width: 370 }} role="presentation">
          {/* Top */}
          <Box className="py-14 px-8" sx={{ backgroundColor: "#48AFFF" }}>
            <Box className="flex justify-between items-center mt-5">
              <img
                className="w-28"
                src="https://static.priceoye.pk/images/logo.svg"
                alt=""
              />
              <FontAwesomeIcon
                className="bg-slate-300 text-lg p-1 h-4 w-4 rounded-full cursor-pointer"
                onClick={toggleDrawer(false)}
                icon={faXmark}
              />
            </Box>

            {isLoggedIn ? (
              <Box className="mt-4">
                <Box className="flex items-center !text-white mb-2">
                  <FontAwesomeIcon className="text-xl" icon={faCircleUser} />
                  <MenuItem>
                    <Link to={"account"}>My account</Link>
                  </MenuItem>
                </Box>

                <Box className="flex items-center !text-white mb-2">
                  <FontAwesomeIcon className="text-xl" icon={faLocationDot} />
                  <MenuItem className="text-xs !important">
                    Track my order
                  </MenuItem>
                </Box>
                <Box className="flex items-center !text-white mb-2">
                  <FontAwesomeIcon className="text-xl" icon={faFileInvoice} />
                  <MenuItem className="text-xs">Launch a complaint</MenuItem>
                </Box>
                <Box className="flex items-center !text-white mb-2">
                  <FontAwesomeIcon className="text-xl" icon={faBell} />
                  <MenuItem className="text-xs">Notifications</MenuItem>
                </Box>
                <Box className="flex items-center !text-white mb-2">
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={faArrowRightToBracket}
                  />
                  <MenuItem
                    className="text-xs"
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </Box>
              </Box>
            ) : (
              <Box className="flex gap-2 mt-6">
                <Button
                  className="w-28 h-10"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "white",
                    color: "#48afff",
                    border: "1px solid #48afff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid white",
                    },
                    paddingX: 2,
                    paddingY: 1,
                  }}
                >
                  <Link to={"sign-in"}>Log in</Link>
                </Button>
                <Button
                  className="w-28 h-10"
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    "&:hover": { backgroundColor: "white", color: "#48afff" },
                    paddingX: 2,
                    paddingY: 1,
                  }}
                >
                  <Link to={"sign-up"}>Register</Link>
                </Button>
              </Box>
            )}
          </Box>

          {/* bottom */}
          <Box className="py-7 px-8">
            {/* CATEGORIES */}
            <Box>
              <Typography className="!text-xs text-slate-500">
                CATEGORIES
              </Typography>

              <Box>
                {/* 1 */}
                <Accordion className="!shadow-none">
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon
                        className="text-lg text-black rounded-full"
                        icon={faAngleDown}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!text-sm"
                  >
                    Mobiles
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-100 rounded-md">
                    <List className="text-sm cursor-pointer">
                      <ListItem>Apple</ListItem>
                      <ListItem>Infinix</ListItem>
                      <ListItem>Itel</ListItem>
                      <ListItem>Nokia</ListItem>
                      <ListItem>Oppo</ListItem>
                      <ListItem>Samsung</ListItem>
                      <ListItem>Realme</ListItem>
                      <ListItem>Tecno</ListItem>
                      <ListItem>Vivo</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                {/* 2 */}

                <Accordion className="!shadow-none">
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon
                        className="text-lg text-black rounded-full"
                        icon={faAngleDown}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!text-sm"
                  >
                    Smart Watches
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-100 rounded-md">
                    <List className="text-sm cursor-pointer">
                      <ListItem>Assorted</ListItem>
                      <ListItem>Dany</ListItem>
                      <ListItem>Faster</ListItem>
                      <ListItem>Samsung</ListItem>
                      <ListItem>Sveston</ListItem>
                      <ListItem>Yolo</ListItem>
                      <ListItem>Zero</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                {/* 3 */}

                <Accordion className="!shadow-none">
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon
                        className="text-lg text-black rounded-full"
                        icon={faAngleDown}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!text-sm"
                  >
                    Wireless Earbuds
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-100 rounded-md">
                    <List className="text-sm cursor-pointer">
                      <ListItem>Airox</ListItem>
                      <ListItem>Anker</ListItem>
                      <ListItem>Assorted</ListItem>
                      <ListItem>Audionic</ListItem>
                      <ListItem>Lenovo</ListItem>
                      <ListItem>Ronin</ListItem>
                      <ListItem>Soundpeats</ListItem>
                      <ListItem>Xiaomi</ListItem>
                      <ListItem>Zero</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                {/* 4 */}

                <Accordion className="!shadow-none">
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon
                        className="text-lg text-black rounded-full"
                        icon={faAngleDown}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!text-sm"
                  >
                    Air Purifiers
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-100 rounded-md">
                    <List className="text-sm cursor-pointer">
                      <ListItem>Beurer</ListItem>
                      <ListItem>Xiaomi</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                {/* 5 */}

                <Accordion className="!shadow-none">
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon
                        className="text-lg text-black rounded-full"
                        icon={faAngleDown}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!text-sm"
                  >
                    Bluetooth Speakers
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-100 rounded-md">
                    <List className="text-sm cursor-pointer">
                      <ListItem>Audionic</ListItem>
                      <ListItem>Faster</ListItem>
                      <ListItem>Sound Crush</ListItem>
                      <ListItem>Xiaomi</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                {/* 6 */}

                <Accordion className="!shadow-none">
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon
                        className="text-lg text-black rounded-full"
                        icon={faAngleDown}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!text-sm"
                  >
                    Power Banks
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-100 rounded-md">
                    <List className="text-sm cursor-pointer">
                      <ListItem>Baseus</ListItem>
                      <ListItem>Faster</ListItem>
                      <ListItem>Joyroom</ListItem>
                      <ListItem>Xiaomi</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                {/* 7 */}

                <Accordion className="!shadow-none">
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon
                        className="text-lg text-black rounded-full"
                        icon={faAngleDown}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!text-sm"
                  >
                    Tablets
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-100 rounded-md">
                    <List className="text-sm cursor-pointer">
                      <ListItem>Apple</ListItem>
                      <ListItem>G-tide</ListItem>
                      <ListItem>Samsung</ListItem>
                      <ListItem>Xiaomi</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                {/* 8 */}

                <Accordion className="!shadow-none">
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon
                        className="text-lg text-black rounded-full"
                        icon={faAngleDown}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!text-sm"
                  >
                    Laptops
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-100 rounded-md">
                    <List className="text-sm cursor-pointer">
                      <ListItem>Apple</ListItem>
                      <ListItem>Dell</ListItem>
                      <ListItem>Hp</ListItem>
                      <ListItem>Infinix</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>

            {/* POPULAR LISTS */}
            <Box className="mt-14">
              <Typography className="!text-xs text-slate-500 pb-4">
                POPULAR LISTS
              </Typography>
              {list.map((price) => (
                <Button
                  key={price.id}
                  className="!text-stone-600 border !border-stone-400 hover:bg-[#48afff] hover:!text-white hover:border-0 !duration-300 !my-1 !capitalize !text-sm"
                  variant="outlined"
                >
                  {price.description}
                </Button>
              ))}
            </Box>

            {/* MAIN NAVIGATION */}
            <Box className="mt-14">
              <Typography className="!text-xs text-slate-500 pb-2">
                MAIN NAVIGATION
              </Typography>

              <List className="text-sm cursor-pointer">
                <ListItem>About</ListItem>
                <ListItem>FAQs</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Press & Blog</ListItem>
                <ListItem>Installments Plan</ListItem>
                <ListItem>Terms & Condition</ListItem>
                <ListItem>Warranty Center</ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AppMenu;
