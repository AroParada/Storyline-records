import { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
// random number generater
import { v4 as uuidv4 } from "uuid";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID, // Store keys in environment variables for security
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "us-east-1", // Replace with your region
});

export default function AddProductCard() {
  const artist = useRef();
  const title = useRef();
  const price = useRef();
  const image = useRef();
  const inventory = useRef(); // Add inventory reference

  const [imagePreview, setImagePreview] = useState(null);

  // Image upload preview
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImagePreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  // upload data to dynamo
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formValues = {
      id: uuidv4(),
      artist: artist.current.value.trim(),
      title: title.current.value.trim(),
      price: parseFloat(price.current.value.trim()),
      image: image.current.files[0],
      inventory: parseInt(inventory.current.value.trim()), // Add inventory value
    };

    // uploads the image to s3 and get the URL
    const imageUrl = await uploadImageToS3(formValues.image);

    // adds the imageUrl to the formValues
    formValues.image = imageUrl;

    await addProduct(formValues);

    // Resetting form values after submission
    alert("Added Product");
    artist.current.value = "";
    title.current.value = "";
    price.current.value = "";
    image.current.value = null;
    setImagePreview(null);
    inventory.current.value = ""; // Reset inventory value
  };

  const uploadImageToS3 = async (file) => {
    const s3BucketName =
      "fictionalrecords004232c4232647c6a10668cb4de31c163357-staging";
    const s3Key = `${file.name}`;

    console.log(file); // Checking if file is undefined or has the expected value

    const params = {
      Bucket: s3BucketName,
      Key: s3Key,
      Body: file,
      ContentType: file.type,
    };

    try {
      const s3 = new AWS.S3();
      await s3.upload(params).promise();

      return `https://${s3BucketName}.s3.amazonaws.com/${s3Key}`;
    } catch (error) {
      console.log("Error uploading image to s3:", error);
      throw new Error("Image upload failed");
    }
  };

  const addProduct = async (formValues) => {
    try {
      const payLoad = {
        id: formValues.id,
        artist: formValues.artist,
        title: formValues.title,
        price: formValues.price,
        image: formValues.image,
        inventory: formValues.inventory, // Add inventory value
      };

      const response = await fetch(
        "https://1rsmflpz2m.execute-api.us-east-1.amazonaws.com/items",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(payLoad),
        }
      );

      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.log("failed to add product", error);
    }
  };

  return (
    <Card border="dark" className="text-center adminCard">
      <Card.Header>Upload new product</Card.Header>
      <Card.Body>
        <Card.Title>Add product</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formArtistName">
            <Form.Label>Artist name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter artist name"
              ref={artist}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAlbumTitle">
            <Form.Label>Album title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Album Title"
              ref={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Price"
              ref={price}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Image</Form.Label>
            <Form.Control
              required
              onChange={onImageChange}
              type="file"
              ref={image}
            />
            {imagePreview === null ? null : (
              // this is a tailwind css class
              <div class="d-flex justify-content-center">
                <img
                  className="previewImage"
                  alt="preview"
                  src={imagePreview}
                />
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Inventory</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Inventory"
              ref={inventory}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}
