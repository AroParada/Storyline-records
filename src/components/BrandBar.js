import React from "react";
import { useState, useContext } from "react";
import {
  Button,
  Container,
  Navbar,
  Modal,
  Offcanvas,
  Nav,
} from "react-bootstrap";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

function BrandBar() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false); // show or hide modal
  const [showOffcanvas, setShowOffcanvas] = useState(false); // show or hide offcanvas

  const handleModalToggle = () => {
    setShow((prevShow) => !prevShow); // Toggles the value of `show`
  };

  const handleOffcanvasToggle = () => {
    if (window.innerWidth < 576) {
      setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
    }
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        key="sm"
        expand="sm"
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-sm`}
            onClick={handleOffcanvasToggle}
          />
          <Navbar.Brand href="/">Storyline Records &#128216;</Navbar.Brand>

          <Button
            className="cartButton d-sm-none mt-1"
            onClick={handleModalToggle}
          >
            Cart ({productsCount})
          </Button>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="start"
            show={showOffcanvas} // tied to state to show or not
            onHide={handleOffcanvasToggle} // To enable clicking outside to close
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Storyline Records
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-2">
                <Nav.Link as={Link} to="/" onClick={handleOffcanvasToggle}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Shop" onClick={handleOffcanvasToggle}>
                  Shop
                </Nav.Link>
                <Nav.Link as={Link} to="/Login" onClick={handleOffcanvasToggle}>
                  Login
                </Nav.Link>
                <Button className="cartButton" onClick={handleModalToggle}>
                  Cart ({productsCount}) Items
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleModalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}
              {/* tofixed adds only 2 values after the decimal */}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <CheckoutButton />
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BrandBar;
