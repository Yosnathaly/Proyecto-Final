import { Link } from 'react-router-dom';

const Home = () => {
  const products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
  ];

  return (
    <div>
      <h2>Página Principal</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <Link to={`/product/${product.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Home;