import { Outlet, Navigate } from "react-router-dom"

const LayoutIsAdmin = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    if(!usuario) return <Navigate to="/" />
    if (usuario && usuario.rol === 2) return <Outlet />
    else return <Navigate to="/" />
}

export default LayoutIsAdmin