import {Button, Col } from "react-bootstrap";
import { Image, Flex } from "@aws-amplify/ui-react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function CartProduct(props) {
  const { getProductData, deleteFromCart } = useContext(CartContext);
  const { id, quantity } = props;
  const productData = getProductData(id);

  if (!productData) {
    return <p>product not found</p>;
  }

  // clean code later to render all information from cartcontext
  return (
    <Flex alignItems="flex-start">
      <Image src={productData.image} alt={productData.title} width="6rem" />
      <Flex direction="column" gap="0rem">
        <h5>{productData.title}</h5>
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <Col sm="6">
          <Button variant="danger" size="sm" onClick={() => deleteFromCart(id)}>
            Remove
          </Button>
        </Col>
        <hr></hr>
      </Flex>
    </Flex>
  );
}

export default CartProduct;
