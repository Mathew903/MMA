import { useEffect, useState } from "react"

const Productos = () => {
  const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/products/")
            .then(res => res.json())
            .then(data => setProductos(data))
    }, [])
  
  	return (
    	<div className="mx-24">
            <h1 className="text-5xl font-bold mt-5 text-center">Productos</h1>
            <ul className="flex gap-x-10 justify-center mt-10 flex-wrap w-full gap-y-10">
                {productos.length === 0 && <li>No hay productos creados aun</li>}
                {productos.length > 0 && productos.map(({ id, name, price, description, creado_por, fecha_creacion }) => (
                    <li key={id} className="bg-gray-200 p-4 rounded-xl">
                        <h2>nombre: <b>{name}</b></h2>
                        <h3>price: {price}</h3>
                        <p>description: {description}</p>
                        <span>creado por: {creado_por}</span>
                        <p>fecha de creacion: {fecha_creacion}</p>
                    </li>
                ))}
            </ul>
        </div>
  	)
}

export default Productos