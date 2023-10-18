import { Link } from "react-router-dom"
import { useThemeContext } from "./contexts/Usuario"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const { usuario, productos } = useThemeContext()
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
          ? <button
              type="button"
              onClick={clearSesion}
              className="text-lg font-semibold text-blue-400 hover:text-blue-300"
            >
             Logout
           </button>
          : <Link
              to="/login"
              className="text-lg font-semibold text-blue-400 hover:text-blue-300">
              Login
            </Link>
        }
      </div>
      {usuario !== null && (
        <div className="mt-10">
          <Link to="/create-product" className="text-xl rounded-xl text-white bg-blue-500 p-3">Crear producto</Link>
          <ul className="mt-5 flex gap-x-10 flex-wrap">
            {productos.length === 0
              ? <li className="text-3xl font-semibold">Aun no hay productos creados...</li>
              : (
                productos.map(({id, name, price, descripcion, fecha_creacion}) => (
                  <li key={id}>
                    <h2>Name: {name}</h2>
                    <h3>Precio {price}</h3>
                    <span>Description: {descripcion}</span>
                    <h4>Fecha de creacion: {fecha_creacion}</h4>
                  </li>
                ))
              )
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
