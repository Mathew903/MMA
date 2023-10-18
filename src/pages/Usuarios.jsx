import { useEffect, useState } from "react"

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/users/")
            .then(res => res.json())
            .then(data => setUsuarios(data))
    }, [])

    return (
        <div className="mx-24">
            <h1 className="text-5xl font-bold mt-5 text-center">Usuarios</h1>
            <ul className="flex gap-x-10 justify-center mt-10 flex-wrap w-full gap-y-10">
                {usuarios.length === 0 && <li>No hay usuarios creados aun</li>}
                {usuarios.length > 0 && usuarios.map(({ id, name, password, rol, creado }) => (
                    <li key={id} className="bg-gray-200 p-4 rounded-xl">
                        <h2>nombre: <b>{name}</b></h2>
                        <h3>password: {password}</h3>
                        <h4>rol: {rol === 1 ? "Usuario" : "Admin"}</h4>
                        <span>fecha de creacion: {creado}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Usuarios