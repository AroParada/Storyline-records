import LoginCard from "../components/LoginCard";
import { Container, Row, Col } from "react-bootstrap";

export function Login() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "65vh" }}
    >
      <Row className="justify-content-center">
        <Col md={6} lg={12}>
          <LoginCard />
        </Col>
      </Row>
    </Container>
  );
}
