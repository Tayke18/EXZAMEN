import React, { createContext, useState } from 'react'
const ThemeContext = createContext()

const ThemeProvaider = ({children})=>{
    const [toggle , setToggle] = useState(false)
    const themeFunction = () => {
        setToggle(!toggle)
    }
    return (
        <ThemeContext.Provider value = {{toggle , themeFunction}}  >
             {children }</ThemeContext.Provider>
    )
    

}
export {ThemeContext , ThemeProvaider}