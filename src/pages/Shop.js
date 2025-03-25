import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import NewProductCard from "../components/NewProductCard";
import { CartContext } from "../CartContext";

function Shop() {
  const { products, loading } = useContext(CartContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-neutral-800 p-8 text-start text-white w-full h-35 ">
        <h1 className="text-xl font-bold">Welcome to the Store</h1>
      </div>
      <div className="px-24 m-16">
        <Row xs={1} md={3} lg={4} className="g-4">
          {products.map((product, idx) => (
            <Col align="center" key={idx}>
              <NewProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Shop;
