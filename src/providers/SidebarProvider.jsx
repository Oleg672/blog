import { createContext, useState } from "react";
import React from "react";

export const SidebarContext = createContext({ opened: false })

export const SidebarProvider = ({ children }) => {

    const [Opened, setOpened] = useState(false)

    return( <SidebarContext.Provider value={{ Opened,setOpened }}>
        {children}
    </SidebarContext.Provider>);
}