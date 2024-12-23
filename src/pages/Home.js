import Slider from "../components/Slider";
import Featured from "../components/Featured";
import { Container } from "react-bootstrap";

export function Home() {
  return (
    <>
      <div class="bg-neutral-800 p-8 text-start text-white w-full h-35 ">
        <h1 class="text-xl font-bold"></h1>
      </div>
      <Container fluid>
        <Slider />
        <Featured />
      </Container>
    </>
  );
}
