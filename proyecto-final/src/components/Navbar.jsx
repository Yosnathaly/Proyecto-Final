//import { useContext } from "react";
//import { TuArmarioContext } from "../context/TuArmarioContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarExample = () => {
    //const {carro} = useContext (TuArmarioContext);
    //const totalCarro = carro.reduce ((total, item) => total + item.price * item.cantidad, 0);
    //const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inactive');

    return(
        // <nav>
        // <li><Link to="/">Home</Link></li>
        // <li><Link to="/carrito">🛒</Link></li>
        // <li><Link to="/login">Iniciar Sesión</Link></li>
        // <li><Link to="/register">Registrarse</Link></li>
        // <li><Link to="/dashboard">Mi Cuenta</Link></li>
        // </nav>
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Tu Armario</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
            <Nav.Link href="/register">Registrarse</Nav.Link>
            <Nav.Link href="/privada">Mi Cuenta</Nav.Link>
            <Nav.Link href="/carrito">🛒</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>

  );
};

export default NavbarExample;