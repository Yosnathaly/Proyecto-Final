import './App.css'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Navbar from './components/Navbar'
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
          <Route path="/carrito" component={Carrito} />
          <Route component={() => <h2>404 Not Found</h2>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App
