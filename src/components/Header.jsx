import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

function NavbarSec() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Navbar
          expand="lg"
          className="navbaar px-4 py-3 d-flex justify-content-between"
          style={{ background: "#ffffff1A", borderRadius: "0 0 40px 40px" }}
        >
          <div className="nav-logo" href="/">
            gaming club
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="option-contain">
            <Nav className="nav-options">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/news">
                News
              </Nav.Link>
              <Nav.Link onClick={handleShow}>
                <button className="styleBtn colorBtn">Contact Us</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      {/* Contact Form Modal */}
      <Modal show={show} onHide={handleClose} centered className="contact-modal">
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="styleBtn clasic-btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="styleBtn colorBtn"  onClick={handleClose}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarSec;
