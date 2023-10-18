import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { ProductForm, Login, Registrarse } from './pages'
import { ContextProvider } from './contexts/Usuario'
import './index.css'
import LayoutRoutePrivate from './routes/LayoutRoutePrivate.jsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/'>
      <Route index element={<App />} />
      <Route path='registrar' element={<Registrarse />} />
      <Route path='login' element={<Login />} />
      <Route path='create-product' element={<LayoutRoutePrivate />}>
        <Route index element={<ProductForm />} />
      </Route>
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
