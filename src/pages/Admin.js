import { Container, Row, Col } from "react-bootstrap";
import AddProductCard from "../components/addProductCard";
import DeleteProductCard from "../components/deleteProductCard";

export function Admin() {
  return (
    <>
      <div class="bg-neutral-800 p-8 text-start text-white w-full h-35 mb-5">
        <h1 class="text-xl font-bold">Admin Page</h1>
      </div>
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
    </>
  );
}
