"use client";
import React,{useState, createContext, useContext} from 'react'
import type {SectionName} from "../../lib/types"
import { links } from '../../lib/data';
// the types are basically type declerations 

type ActiveSectionContextProviderProps={
    children: React.ReactNode;
} ;
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeofLastClick: number;
    setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>

    
}// create context
export const ActiveSectionContext = createContext<ActiveSectionContextType|null>(null) ;
// making sure thr provider accepts children
export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps ) {
    const [activeSection ,setActiveSection ] = useState<SectionName>("Home");
    const[timeofLastClick, setTimeofLastClick] = useState(0); // we use this to disABLE observer  while clicking
  return (
// the provider has two values
  <ActiveSectionContext.Provider value={{
    activeSection, setActiveSection, timeofLastClick, setTimeofLastClick
  }}>

    {children}
  </ActiveSectionContext.Provider>
  )  
}
// A hook is just a function that just starts with the use keyword
// My First Hook
export function useActiveSection() {
  const context = useContext(ActiveSectionContext)
  if(context===null) {
    throw new Error(
      "UseActiveSection must be used inside within an ActiveSectionProvider component"
    )
  }
  return context;
} 
