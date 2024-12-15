import { faCircleUser, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MyAccount = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.fullName) {
      setUserName(storedUser.fullName);
    }
  }, []);

  return (
    <Box className="bg-slate-100 pt-7">
      <Box className="bg-[#48AFFF] flex justify-between px-5 relative py-9">

        {/* left side */}

        <Box className="py-10 flex gap-2 items-center">
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <FontAwesomeIcon className="text-white text-4xl md:text-6xl" icon={faCircleUser} />
          </IconButton>
          <Box>
            {userName && <Typography className="w-20 text-white pb-2">{userName}</Typography>}
           <Typography sx={{fontSize:"13px"}} className="w-40 px-2 rounded-full text-black bg-[#FFF200]">Priceoye club member</Typography>
          </Box>
        </Box>

          {/* right side */}
      <Box className="flex flex-col items-end mt-7">
        <FontAwesomeIcon className="text-white text-2xl" icon={faGear}/>
        <Box class="h-[40%] overflow-hidden absolute bottom-0 right-0">
        <img className="w-full" src="https://static.priceoye.pk/images/my-account/po-logo.svg" alt="" />

        </Box>
      </Box>


      </Box>

    
    </Box>
  );
};

export default MyAccount;
