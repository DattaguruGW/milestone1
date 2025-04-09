// src/pages/EventRegistration.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    tickets: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', event: '', tickets: 1 });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow p-4">
            <h3 className="text-center mb-4">Event Registration</h3>

            {submitted && (
              <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                Registration successful!
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="regName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="regEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="regEvent">
                <Form.Label>Select Event</Form.Label>
                <Form.Select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Choose an event --</option>
                  <option value="Sunset Music Festival">Sunset Music Festival</option>
                  <option value="Beach Volleyball Championship">Beach Volleyball Championship</option>
                  <option value="Eco Clean-up Drive">Eco Clean-up Drive</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4" controlId="regTickets">
                <Form.Label>No. of Tickets</Form.Label>
                <Form.Control
                  type="number"
                  name="tickets"
                  min="1"
                  max="10"
                  value={formData.tickets}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" variant="primary">
                  Register
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventRegistration;
