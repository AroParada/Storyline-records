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
      <div className="mx-6 my-8 md:my-0 md:mx-0 md:m-12 lg:m-16 xl:px-24">
        <Row xs={1} md={2} lg={2} xl={4} className="g-4">
          {products.map((product, idx) => (
            <Col key={idx} align="center">
              <NewProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Shop;
