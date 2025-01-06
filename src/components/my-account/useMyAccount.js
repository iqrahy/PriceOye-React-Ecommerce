import React, { useEffect, useState } from 'react'
import useScrollTo from '../useScrollTo/useScrollTo';

const useMyAccount = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.name) {
        setUserName(storedUser.name);
      }
    }, []);
  
    useScrollTo()

  return {userName}
}

export default useMyAccount
