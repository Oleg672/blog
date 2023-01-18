import { createContext, useState } from "react";
import React from "react";

export const ArticleDataContext = createContext({ opened: false })

export const ArticleDataProvider = ({ children }) => {

    const [ArticleData, setArticleData] = useState({img:{},video:{},title:'',description:'',date:'',category:'',content:''})

    return( <ArticleDataContext.Provider value={{ ArticleData, setArticleData }}>
        {children}
    </ArticleDataContext.Provider>);
}