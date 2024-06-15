import './App.css'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Navbar from './components/Navbar'
import ProductDetail from './views/ProductDetail'
import Login from './views/Login'
import Register from './views/Register'
import PaginaPrivada from './views/PaginaPrivada'
import { TuArmarioContext } from './context/TuArmarioContext'
import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/privada" element={<PaginaPrivada/>} />
          <Route component={() => <h2>404 Not Found</h2>} />
        </Routes>
      </div>
  );
}

export default App
