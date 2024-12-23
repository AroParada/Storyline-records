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
    <>
      <div class="bg-neutral-800 p-8 text-start text-white w-full h-35 mb-5">
        <h1 class="text-xl font-bold">Welcome to the Store</h1>
      </div>
      <Container fluid>
        <Row xs={1} md={3} className="g-4">
          {products.map((product, idx) => (
            <Col align="center" key={idx}>
              <NewProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Shop;
