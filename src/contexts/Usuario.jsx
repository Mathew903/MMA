import { createContext, useContext, useState, useEffect } from "react"

const ThemeContent = createContext(null)

export const useThemeContext = () => useContext(ThemeContent)

export const ContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")))
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setUsuario(JSON.parse(localStorage.getItem("usuario")))
    }, [])

    useEffect(() => {
        if (localStorage.getItem("usuario")) {
            fetch(`http://localhost:8000/products/${usuario.id}`)
                .then(res => res.json())
                .then(data => setProductos(data))
        }
    }, [])

    return (
        <ThemeContent.Provider value={{usuario, setUsuario, productos, setProductos}}>
            {children}
        </ThemeContent.Provider>
    )
}
