import Slider from "../components/Slider";
import Featured from "../components/Featured";
import { Container } from "react-bootstrap";

export function Home() {
  return (
    <Container fluid>
      <Slider />
      <Featured />
    </Container>
  );
}
