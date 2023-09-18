import { createContext, useState } from "react";

export const ActiveUserContext = createContext();

export const ActiveUserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  const [activeConvo, setActiveConvo] = useState(null);

  const value = {
    activeUser,
    setActiveUser,
    activeConvo,
    setActiveConvo,
  };
  return (
    <ActiveUserContext.Provider value={value}>
      {children}
    </ActiveUserContext.Provider>
  );
};
