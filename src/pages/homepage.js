// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h1 className="display-4 fw-bold">Mangalore Beach Festival</h1>
          <p className="lead">
            Celebrate the sun, sand, and sea! Join us for exciting events, vibrant culture,
            and unforgettable experiences across Mangalore’s beautiful beaches.
          </p>
          <Button variant="primary" href="/events" size="lg" className="me-3">
            Explore Events
          </Button>
          <Button variant="outline-secondary" href="/register" size="lg">
            Register Now
          </Button>
        </Col>
        <Col md={6}>
          <img
            src="https://images.stockcake.com/public/0/d/c/0dca1e1d-34b9-43af-941d-3d60d946b7a3_large/beach-festival-fun-stockcake.jpg"
            alt="Beach Festival"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>

      {/* Highlights Section */}
      <h2 className="text-center mb-4">What to Expect</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              <Card.Title>Live Music & Performances</Card.Title>
              <Card.Text>
                Groove to the beats with live bands, DJs, and cultural acts at the beach stage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              <Card.Title>Beach Attractions</Card.Title>
              <Card.Text>
                Enjoy beach volleyball, water sports, food stalls, and more with friends and family.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              <Card.Title>Community & Culture</Card.Title>
              <Card.Text>
                Be part of eco drives, art installations, and explore the rich coastal heritage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
