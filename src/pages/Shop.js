import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewProductCard from "../components/NewProductCard";
import { CartContext } from "../CartContext";

function Shop() {
  const { products, loading } = useContext(CartContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <h1 align="center" className="p-3">
        Welcome to the Store
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product, idx) => (
          <Col align="center" key={idx}>
            <NewProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Shop;
