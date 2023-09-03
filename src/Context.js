import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [navbarCollapsed, setNavbarCollapsed] = useState(false);

    return <AppContext.Provider value={{ navbarCollapsed, setNavbarCollapsed }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    return useContext(AppContext);
};
