import LoginCard from "../components/LoginCard";
import { Container, Row, Col } from "react-bootstrap";

export function Login() {
  return (
    <>
      <div class="bg-neutral-800 p-8 text-start text-white w-full h-35 ">
        <h1 class="text-xl font-bold">Login</h1>
      </div>
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
    </>
  );
}
