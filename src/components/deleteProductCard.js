import { useContext, useState } from "react";
import {
  Card,
  ListGroup,
} from "react-bootstrap";
import AWS from "aws-sdk";

import { CartContext } from "../CartContext";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID, // Store keys in environment variables for security
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "us-east-1", // Replace with your region
});

export default function DeleteProductCard() {
  const { products, loading } = useContext(CartContext);

  return (
    <Card className="adminCard">
      <Card.Header>Remove a product</Card.Header>
      <Card.Body>
        <Card.Title>Remove product</Card.Title>
        <ListGroup>
          {products.map((product, idx) => (
            <ListGroup.Item>
              {product.title} - {product.artist}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}
