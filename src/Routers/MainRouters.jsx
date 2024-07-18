import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Register } from "../pages/Register/Register"
import { Product } from "../pages/Product/Product"


export function MainRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
    </BrowserRouter>

    // useRoutes([
    //   { path: '/', element: <Home /> },
    //   { path: '/register', element: <Register /> }
    // ])
  )
}