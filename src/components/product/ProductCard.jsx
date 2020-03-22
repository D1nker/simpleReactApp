import React from 'react';
import { Card, Button } from 'react-bootstrap';
const ProductCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://fakeimg.pl/300/" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Price: {props.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</Card.Text>
        <Card.Text className="card-text--custom">Description: {props.description}</Card.Text>
      <Button variant="primary">Buy it</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
