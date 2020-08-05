import React from 'react';
import ListsContextProvider from "./ListsContextProvider";
import ItemsContextProvider from "./ItemsContextProvider";

const GlobalContextProvider = ({children}) => {

    return (
        <ListsContextProvider>
            <ItemsContextProvider>
                {children}
            </ItemsContextProvider>
        </ListsContextProvider>
    )
};

export default GlobalContextProvider;
