import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Simulate a delay for demostration purposes
    setTimeout(() => {
      setSubmitted(true);
    }, 2000);

    // Reset forms filds
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <Container className="contact-container">
      <div className="contact-wrapper">
        <h2 className="contact-header">Contact Us</h2>
        {submitted ? (
          <div id="submitted-message-container">
            <Alert variant="success" className="message-alert">
              <span className="message-text">
                We have received your message. Thank you for your input!
              </span>
              <div className="message-button">
                <Button
                  variant="secondary"
                  onClick={handleReturnHome}
                  className="submit-button"
                >
                  Return Home
                </Button>
              </div>
            </Alert>
          </div>
        ) : (
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="name">
              <Form.Label className="form-label">Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="form-label">Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label className="form-label">Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="form-control"
              ></Form.Control>
            </Form.Group>
            <div style={{ textAlign: "right" }}>
              <Button
                variant="secondary"
                type="submit"
                className="submit-button"
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </div>
    </Container>
  );
};
export default Contact;
