import React, { createContext, useState } from 'react';
export const phoneContext=createContext()

 export const UserNumber = ({children}) => {
    const[phone,setPhone]=useState('')
    return (
      <phoneContext.Provider value={{phone,setPhone}}>
        {children}
      </phoneContext.Provider>
    );
};

