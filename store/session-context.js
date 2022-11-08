import React, { useState, useEffect } from "react";

const SessionContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const SessionContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hours = 24 * 3; // 5 minutes
    const setupTime = localStorage.getItem("setupTime");
    const now = new Date().getTime();

    if (setupTime !== null) {
      // clear storage after hours
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    }
  }, [isLoggedIn]);

  const loginHandler = () => {
    const now = new Date().getTime();
    localStorage.setItem("setupTime", now);
    setIsLoggedIn(true);
  };

  return (
    <SessionContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
