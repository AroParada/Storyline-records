import { Button } from "react-bootstrap";
import storePicture from "../assets/record-store-featured-2160574280.jpg";

export default function Banner() {
  return (
    // this is tailwind css
    <div class="relative bg-neutral-800 p-8 text-start text-white w-full h-96 flex items-end">
      <img
        src={storePicture}
        alt="Background"
        className="opacity-25 absolute inset-0 w-full h-full object-cover z-0 filter grayscale"
      />
      <div className="relative z-10">
        <h1 class="text-xxl font-bold align-bottom">Winter Sale</h1>
        <Button href="/Shop" variant="outline-light" size="lg" className="ms-2">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

// notes:
// - The Button component is imported from react-bootstrap
// - The image is imported from the assets folder
// - The image is set as the background of the div
// - The text is placed on top of the image using z-index
// - The text is styled using Tailwind CSS classes
// - The Button component is styled using Bootstrap classes