import React, { useContext } from "react";
//import { NavLink } from 'react-router-dom';
import { TuArmarioContext } from "../context/TuArmarioContext";

const Navbar = () => {
    const { carro } = useContext (TuArmarioContext);
    const totalCarro = carro.reduce ((total, item) => total + item.price * item.cantidad, 0);
    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inactive');

    return(
        <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;