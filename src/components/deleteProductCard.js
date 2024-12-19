import { useContext, useState } from "react";
import { Card, ListGroup, Button, Modal } from "react-bootstrap";
import AWS from "aws-sdk";

import { CartContext } from "../CartContext";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID, // Store keys in environment variables for security
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "us-east-1", // Replace with your region
});

export default function DeleteProductCard() {
  const { products, loading } = useContext(CartContext);
  const [modalShow, setModalShow] = useState(false); 
  const [clickedProductId, setClickedProductId] = useState("");

  const productClicked = (productId, productTitle) => {
    setClickedProductId(productId); // store productId for deletion
    setModalShow(true); // show modal confirmation
  };

  const deleteProduct = async (clickedProductId) => {
    try {
      const response = await fetch(
        `https://1rsmflpz2m.execute-api.us-east-1.amazonaws.com/items/${clickedProductId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

      if (response.ok) {
        alert("item deleted successfully");
      } else {
        const error = await response.json();
        console.error("error deleting item", error);
        alert("failed to delete item");
      }
    } catch (error) {
      console.log("failed to delete product", error);
      throw new Error("product delete failed");
    }
  };

  return (
    <>
      <Card className="adminCard">
        <Card.Header>Remove a product</Card.Header>
        <Card.Body>
          <Card.Title>Remove product</Card.Title>
          <ListGroup>
            {products.map((product) => (
              <ListGroup.Item
                key={product.id}
                action
                onClick={() => productClicked(product.id, product.title)}
              >
                {product.title} - {product.artist}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete product from shop</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => deleteProduct(clickedProductId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
