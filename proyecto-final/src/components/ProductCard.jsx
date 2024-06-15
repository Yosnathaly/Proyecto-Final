import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>Titulo</Card.Title>
        <Card.Text>
          Descripcion
        </Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;