import { Outlet, Link, useNavigate } from "react-router-dom"
import { useThemeContext } from './../contexts/Usuario';

const Navbar = () => {
    const { usuario } = useThemeContext()
    const navigate = useNavigate()
    
    const clearSesion = (e) => {
        localStorage.removeItem("usuario")
        navigate("/login")
    }

    return (
        <>
            <div className="w-full h-[70px] bg-black text-white">
                <ul className="text-xl font-semibold w-full h-full flex items-center justify-end gap-x-5 -ml-10">
                    <li>
                        <Link to="/" className="hover:text-blue-300">Home</Link>
                    </li>
                    {usuario !== null ? (
                        <>
                            {usuario.rol === 1 ? (
                                <li>
                                    <Link className="hover:text-blue-300" to="create-product">Crear producto</Link>
                                </li>
                                ) : (
                                    <>
                                        <li>
                                            <Link className="hover:text-blue-300" to="/admin/productos">Productos</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-blue-300" to="/admin/usuarios">Usuarios</Link>
                                        </li>
                                    </>
                                )
                            }
                            <li>
                                <button className="hover:text-blue-300" type="button" onClick={clearSesion}>Logout</button>
                            </li>
                        </>
                    ) : (    
                        <>
                            <li>
                                <Link className="hover:text-blue-300" to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className="hover:text-blue-300" to="/registrar">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar