import { Link } from 'react-router-dom';

const Carrito = () => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>Lista de productos en el carrito.</p>
      <Link to="/login">Iniciar Sesión</Link> o <Link to="/register">Registrarse</Link>
    </div>
  );
};

export default Carrito;