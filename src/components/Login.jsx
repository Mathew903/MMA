import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useThemeContext } from "../contexts/Usuario"

const Login = () => {
  const [login, setLogin] = useState({ name: "", password: "" })
  
  const {setUsuario} = useThemeContext()
  const navigate = useNavigate()
  
  const onLogin = (e) => {
    e.preventDefault()
    try {
      fetch("http://127.0.0.1:8000/login", { method: "POST", body: login})
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("usuario", JSON.stringify(data))
          setUsuario(data)
          navigate("/")
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="w-full h-[100vh]">
      <div className="flex h-full justify-center items-center">
        <form className="bg-[#1C2431] w-[500px] h-[500px] rounded-2xl text-white" onSubmit={onLogin}>
          <h1 className="text-3xl font-bold text-center mt-10">Login</h1>
          <div className="flex flex-col justify-center items-center mt-28 gap-y-10 text-black font-semibold">
            <input
              type="text"
              value={login.username}
              placeholder="Nombre de usuario"
              className="focus:border-2 focus:border-blue-400 outline-none p-2 rounded-lg w-[300px]"
              onChange={(e) => setLogin({...login, username: e.target.value, })}
              />
            <input
              value={login.psw}
              type="password"
              placeholder="Contraseña"
              className="p-2 rounded-lg w-[300px] focus:border-2 focus:border-blue-400 outline-none"
              onChange={(e) => setLogin({...login, psw: e.target.value})}
            />
            <button type="submit" className="text-white bg-blue-600 p-2 rounded-xl">Iniciar sesion</button>
          </div>
          <div className="flex gap-x-2 w-full justify-end -ml-10 mt-14 relative">
            <span>¿No tienes una cuenta?</span>
            <Link to="/registrar" className="hover:text-blue-400">Registrate</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login