import { Outlet, Navigate } from "react-router-dom"

const LayoutRoutePrivate = () => {   
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    if(!usuario) return <Navigate to="/" />
    if (usuario && usuario.rol === 1) return <Outlet />
    else return <Navigate to="/" />
}

export default LayoutRoutePrivate