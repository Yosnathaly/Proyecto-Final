import './App.css'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Navbar from './components/Navbar'
import ProductDetail from './views/ProductDetail'
import Login from './views/Login'
import Register from './views/Register'
import PaginaPrivada from './views/PaginaPrivada'
import { TuArmarioContext } from './context/TuArmarioContext'
//import { Routes, Route } from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom';

function App() {
 
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/privada" component={PaginaPrivada} />
          <Route component={() => <h2>404 Not Found</h2>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App
