import { useThemeContext } from "./contexts/Usuario"

function App() {
  const { usuario, productos } = useThemeContext()
  return (
    <div className="mx-24 mt-14">
      <h1 className="text-4xl font-bold text-gray-500">Bienvenido a la gestión de productos</h1>
     
      {usuario !== null && usuario?.rol === 1 ? (
        <div className="mt-10">
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
        )
        : usuario?.rol === 2 ? <h2 className="text-xl mt-5 font-semibold">Bienvenido administrador {usuario.name.split("@")[0]}</h2> : (
          <div className="flex items-center gap-x-5 mt-3">
            <span className="text-xl">Registrese para poder comprar o vender productos</span>
          </div>
        )}
    </div>
  )
}

export default App
