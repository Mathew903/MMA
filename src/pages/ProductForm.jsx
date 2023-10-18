import { useState } from "react"
import { useThemeContext } from "../contexts/Usuario"
import { useNavigate } from "react-router-dom"

const ProductForm = () => {
  const [producto, setProducto] = useState({name: "", description: "", price: 0})
  const {usuario, productos, setProductos} = useThemeContext()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value })
  }

  const createProduct = (e) => {
    e.preventDefault()
    fetch("http://localhost:8000/create-product/", { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({...producto, creado_por: usuario.id}) })
      .then(res => res.json())
      .then(data => {
        setProductos([...productos, data])
        navigate("/")
      })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold m-10">Crear producto</h1>
      <form className="flex w-full h-full items-center justify-center" onSubmit={createProduct}>
        <div className="flex flex-col w-[300px] gap-y-4">
          <input type="text" value={producto.name} name="name" onChange={handleChange} placeholder="name" className="p-2 bg-gray-100"/>
          <input type="number" value={producto.price} name="price" onChange={handleChange}  placeholder="price" className="p-2 bg-gray-100"/>
          <input type="text" value={producto.description} name="description" onChange={handleChange} placeholder="description" className="p-2 bg-gray-100" />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-400">Crear producto</button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm