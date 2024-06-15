import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalles del Producto {id}</h2>
      <p>Aquí van las características del producto.</p>
      <Link to="/carrito">Comprar</Link>
    </div>
  );
};

export default ProductDetail;