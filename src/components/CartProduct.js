import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { Image, Flex } from "@aws-amplify/ui-react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function CartProduct(props) {
  const { getProductData, deleteFromCart } = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  if (!productData) {
    return <p>product not found</p>;
  }

  return (
    <Flex alignItems="flex-start">
      <Image src={productData.image} alt={productData.title} width="8rem" />
      <Flex direction="column" gap="xs">
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <Col sm="6">
          <Button size="sm" onClick={() => deleteFromCart(id)}>
            Remove
          </Button>
        </Col>
        <hr></hr>
      </Flex>
    </Flex>
  );
}

export default CartProduct;
