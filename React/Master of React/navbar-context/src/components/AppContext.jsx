import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Context Provider Component
export const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext ;