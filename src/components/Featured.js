import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
            <Card.Title>Live Events</Card.Title>
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
            <Card.Title>Merchandise</Card.Title>
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
            <Card.Title>Used Books</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default FeaturedCards;
