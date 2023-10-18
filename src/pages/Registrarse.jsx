import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useThemeContext } from "../contexts/Usuario"

const Registrarse = () => {
  const [regist, setRegist] = useState({name: "", password: "", rol: 2})
  const {setUsuario} = useThemeContext()
  const navigate = useNavigate()
  
  const onRegist = async (e) => {
    e.preventDefault()
    try {
      if (regist.name && regist.name.split("@")[1] === "admin.admin" ) {
        setRegist({ ...regist, rol: 2 });
      }
      if (regist.name && regist.password) {
        console.log(regist)
        fetch("http://127.0.0.1:8000/registrar", { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(regist)})
          .then(res => res.json())
          .then(data => {
            localStorage.setItem("usuario", JSON.stringify(data))
            setUsuario(data)
            navigate("/")
          })
      }
      else console.log("FALTA COMPLETAR DATOS")
    } catch (error) {
      console.log(error.message)
    }
  }
  
  return (
    <div className="w-full h-[100vh]">
      <div className="flex h-full justify-center items-center">
        <form className="bg-[#1C2431] w-[500px] h-[500px] rounded-2xl text-white" onSubmit={onRegist}>
          <h1 className="text-3xl font-bold text-center mt-10">Registrer</h1>
          <div className="flex flex-col justify-center items-center mt-28 gap-y-10 text-black font-semibold">
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="focus:border-2 focus:border-blue-400 outline-none p-2 rounded-lg w-[300px]"
              value={regist.name}
              onChange={(e) => setRegist({...regist, name: e.target.value, })}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="p-2 rounded-lg w-[300px] focus:border-2 focus:border-blue-400 outline-none"
              value={regist.password}
              onChange={(e) => setRegist({...regist, password: e.target.value, })}
            />
            <button type="submit" className="text-white bg-blue-600 p-2 rounded-xl">Registrarse</button>
          </div>
          <div className="flex gap-x-2 w-full justify-end -ml-10 mt-14 relative">
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login" className="hover:text-blue-400">Inicia sesion</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registrarse