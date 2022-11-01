import React, { useState, useEffect } from "react";

const SessionContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const SessionContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    const hours = 1;

    const setupTime = localStorage.getItem("setupTime");
    console.log("TIMEEEEEEEEE", setupTime);

    const now = new Date().getTime();

    if (setupTime !== null) {
      // clear storage afte hours
      if (now - setupTime > hours * 60 * 60 * 1000) {
        console.log("Second if");
        localStorage.clear();
        localStorage.setItem("setupTime", now);

        localStorage.removeItem("isLoggedIn");
      } else {
        setIsLoggedIn(true);
      }
    }

    // if (storedUserLoggedInInformation === "1") {
    //   setIsLoggedIn(true);
    // }
  }, [isLoggedIn]);

  const logoutHandler = () => {
    console.log("CLick NOOOOO");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    console.log("CLick YEEEES");
    const now = new Date().getTime();
    localStorage.setItem("setupTime", now);

    localStorage.setItem("isLoggedIn", true);

    setIsLoggedIn(true);
  };

  return (
    <SessionContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
