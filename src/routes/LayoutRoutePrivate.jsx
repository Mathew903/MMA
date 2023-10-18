import { useNavigate, Outlet } from "react-router-dom"
import { useEffect } from "react"

const LayoutRoutePrivate = () => {
    const navigate = useNavigate()
    
    useEffect(() => { 
        if(!localStorage.getItem("usuario")) navigate("/")
    }, [])
    
    if (localStorage.getItem("usuario")) return <Outlet />
}

export default LayoutRoutePrivate