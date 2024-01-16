import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPage from './pages/ProductPage'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
