import { Card, Col, Row, Button } from "react-bootstrap";
import Live from "../assets/130907063709-23-punk-history-restricted.jpg";
import Merchandise from "../assets/dbbf3a60c162a140f29a630964f9b516.jpg";
import Books from "../assets/overflowing-bookcases.jpg";

function FeaturedCards() {
  return (
    <Row xs={1} sm={4} className="justify-content-center">
      <Col sm={10} md={8} lg={3} className="mx-5 mb-4">
        <Card border="dark">
          <Card.Img variant="top" src={Live} />
          <Card.Body>
            <Button
              // href="/Shop"
              variant="outline-dark"
              size="md"
              className="ms-2"
            >
              Live Events
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col
        sm={10}
        md={8}
        lg={3}
        className="mx-5 mb-4"
        // key={idx}
      >
        <Card border="dark">
          <Card.Img variant="top" src={Merchandise} />
          <Card.Body>
            <Button
              // href="/Shop"
              variant="outline-dark"
              size="md"
              className="ms-2"
            >
              Merchandise
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col
        sm={10}
        md={8}
        lg={3}
        className="mx-5 mb-4"
        // key={idx}
      >
        <Card border="dark">
          <Card.Img variant="top" src={Books} />
          <Card.Body>
            <Button
              // href="/Shop"
              variant="outline-dark"
              size="md"
              className="ms-2"
            >
              Used Books
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default FeaturedCards;
