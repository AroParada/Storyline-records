import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

export function Admin() {
  const artist = useRef();
  const title = useRef();
  const price = useRef();
  const image = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValues = {
      artist: artist.current.value.trim(),
      title: title.current.value.trim(),
      price: price.current.value.trim(),
      image: image.current.files[0],
    };
    console.log(formValues, "form values");

    // Resetting form values after submission
    artist.current.value = "";
    title.current.value = "";
    price.current.value = "";
    image.current.value = null;
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Add a new product</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formArtistName">
                  <Form.Label>Artist name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter artist name"
                    ref={artist}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAlbumTitle">
                  <Form.Label>Album title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Album Title"
                    ref={title}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="Price" ref={price} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFile">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" ref={image} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
