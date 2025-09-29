import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

import { db } from "../firebase"; // adjust path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";

function NavbarSec() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
      handleClose();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
              />
            </Form.Group>

            <Modal.Footer>
              <Button className="styleBtn clasic-btn" onClick={handleClose}>
                Close
              </Button>
              <Button
                type="submit"
                className="styleBtn colorBtn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarSec;
