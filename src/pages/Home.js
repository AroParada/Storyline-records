import Slider from "../components/Slider";
import Featured from "../components/Featured";
import Banner from "../components/Banner";
import { Container } from "react-bootstrap";

export function Home() {
  return (
    <>
      <Banner />
      <Container fluid>
        <Slider />
        <Featured />
      </Container>
    </>
  );
}
