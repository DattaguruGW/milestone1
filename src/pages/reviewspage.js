// src/pages/ReviewsPage.js
import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, ListGroup } from 'react-bootstrap';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Ananya R.',
      message: 'Had an amazing time! The beach concerts were magical.',
    },
    {
      name: 'Rahul D.',
      message: 'Very well organized! Loved the clean-up drive and beach games.',
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.message) {
      setReviews((prev) => [newReview, ...prev]);
      setNewReview({ name: '', message: '' });
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Attendee Reviews</h2>

      <Row className="mb-5">
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="p-4 shadow-sm">
            <h5 className="mb-3">Leave a Review</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={newReview.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" variant="primary">Submit Review</Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h4 className="mb-3">Recent Reviews</h4>
          <ListGroup>
            {reviews.map((review, index) => (
              <ListGroup.Item key={index}>
                <strong>{review.name}</strong>
                <p className="mb-1">{review.message}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewsPage;
