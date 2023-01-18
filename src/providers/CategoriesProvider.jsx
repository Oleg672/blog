import { createContext, useState } from "react";
import React from "react";

export const CategoriesContext = createContext({ category: '' })

export const CategoriesProvider = ({ children }) => {

    const [Categories, setCategories] = useState('')

    return( <CategoriesContext.Provider value={{ Categories,setCategories }}>
        {children}
    </CategoriesContext.Provider>);
}