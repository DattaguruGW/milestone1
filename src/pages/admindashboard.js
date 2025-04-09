// src/pages/AdminDashboard.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Admin Dashboard</h2>
      
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Total Events</Card.Title>
              <Card.Text>24 events listed</Card.Text>
              <Button variant="primary" size="sm">Manage Events</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Registrations</Card.Title>
              <Card.Text>132 total registrations</Card.Text>
              <Button variant="primary" size="sm">View Registrations</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>User Feedback</Card.Title>
              <Card.Text>42 new reviews</Card.Text>
              <Button variant="primary" size="sm">Moderate Reviews</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Beach Info</Card.Title>
              <Card.Text>Update beach details, maps, and attractions.</Card.Text>
              <Button variant="secondary" size="sm">Edit Beaches</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Calendar</Card.Title>
              <Card.Text>Update the event calendar and holidays.</Card.Text>
              <Button variant="secondary" size="sm">Manage Calendar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
