import { Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Card, Button, Flex, Image, Badge, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function NewProductCard(props) {
  //props.product is the product we are selling
  const product = props.product;
  // to access the cart object
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  function checkStock(product) {
    const { inventory } = product;
    if (!inventory) {
      return <Badge color="error">Out of Stock</Badge>;
    }
    if (inventory < 10) {
      return <Badge variation="error">Low Stock</Badge>;
    }
    return <Badge variation="success">New</Badge>;
  }

  return (
    <Card variation="outlined">
      <Flex alignItems="flex-start">
        <Image src={product.image} alt="Amplify" width="10rem" />
        <Flex direction="column" gap="xs">
          <Flex>{checkStock(product)}</Flex>
          <Text fontSize="large" fontWeight="semibold">
            {product.title}
          </Text>
          <Text color="font.tertiary">{product.artist}</Text>
          <Text fontSize="large" color="secondary">
            ${product.price}
          </Text>
          {productQuantity > 0 ? (
            <>
              <Form className="d-flex justify-content-center" as={Row}>
                <Form.Label column="true" sm="6">
                  In Cart: {productQuantity}{" "}
                </Form.Label>
                <Row className="d-flex justify-content-center">
                  <Col xs="6" className="d-flex justify-content-center">
                    <Button
                      onClick={() => cart.removeOneFromCart(product.id)}
                      className="mx-2 flex-grow-1"
                    >
                      -
                    </Button>
                    <Button
                      isDisabled={productQuantity >= product.inventory}
                      onClick={() => cart.addOneToCart(product.id)}
                      className="mx-2 flex-grow-1"
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Button
                variation="link"
                onClick={() => cart.deleteFromCart(product.id)}
                className="my-2"
              >
                Remove from cart
              </Button>
            </>
          ) : (
            <Button
              isDisabled={
                product.inventory === 0 || product.inventory === undefined
              }
              variant="primary"
              onClick={() => cart.addOneToCart(product.id)}
            >
              Add To Cart
            </Button>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}

export default NewProductCard;
