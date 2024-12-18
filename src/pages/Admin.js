import { Container, Row, Col } from "react-bootstrap";
import AddProductCard from "../components/addProductCard";
import DeleteProductCard from "../components/deleteProductCard";

export function Admin() {
  return (
    <Container fluid>
      <Row className="justify-content-center g-4">
        <Col xs={12} sm={12} md={6}>
          <AddProductCard />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <DeleteProductCard />
        </Col>
      </Row>
    </Container>
  );
}
