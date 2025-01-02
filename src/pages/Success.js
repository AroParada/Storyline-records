import "@aws-amplify/ui-react/styles.css";
import { Heading, Card } from "@aws-amplify/ui-react";
import { Container, Row, Col } from "react-bootstrap";

function SuccessPage() {
  return (
    <>
      <div class="bg-neutral-800 p-8 text-start text-white w-full h-35 ">
        <h1 class="text-xl font-bold"></h1>
      </div>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "65vh" }}
      >
        <Row className="justify-content-center">
          <Col md={6} lg={12}>
            <Card>
              <Heading className="mb-5" level={1}>
                Purchase Successful!
              </Heading>
                <p>Thank you for shopping with us! A confirmation email has been sent</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SuccessPage;
