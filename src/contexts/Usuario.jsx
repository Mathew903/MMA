import { createContext, useContext, useState, useEffect } from "react"

const ThemeContent = createContext(null)

export const useThemeContext = () => useContext(ThemeContent)

export const ContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")))
  
    useEffect(() => {
        setUsuario(JSON.parse(localStorage.getItem("usuario")))
    }, [])

    return (
        <ThemeContent.Provider value={{usuario, setUsuario}}>
            {children}
        </ThemeContent.Provider>
    )
}
