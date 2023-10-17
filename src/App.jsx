import { Link } from "react-router-dom"
import { useThemeContext } from "./contexts/Usuario"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const { usuario } = useThemeContext()
  const clearSesion = (e) => {
    localStorage.removeItem("usuario")
    navigate("/login")
  }
  return (
    <div className="mx-24 mt-14">
      <h1 className="text-4xl font-bold text-gray-500">Bienvenido a la gestión de productos</h1>
      <div className="flex items-center gap-x-5 mt-3">
        <span className="text-xl">Registrese para poder comprar o vender productos</span>
        {usuario !== null
          ? <button type="button" onClick={clearSesion} className="text-lg font-semibold text-blue-400 hover:text-blue-300">Logout</button>
          : <Link to="/login" className="text-lg font-semibold text-blue-400 hover:text-blue-300">Login</Link>
        }
      </div>
      <div className="mt-10">
        {usuario !== null && <h2 className="text-2xl text-gray-500">Crear producto</h2>}
      </div>
    </div>
  )
}

export default App
