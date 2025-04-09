// src/pages/EventsPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const events = [
  {
    title: 'Sunset Music Festival',
    date: 'April 15, 2025',
    location: 'Panambur Beach',
    description: 'Enjoy live music performances during the sunset by popular artists.',
    image: 'https://images.stockcake.com/public/a/1/3/a13bc5dd-f05e-4263-a27b-805b09f014d6_large/sunset-music-vibes-stockcake.jpg',
  },
  {
    title: 'Beach Volleyball Championship',
    date: 'April 22, 2025',
    location: 'Tannirbhavi Beach',
    description: 'Cheer for your favorite team in this exciting beach volleyball tournament.',
    image: 'https://volleycountry.com/wp-content/uploads/2020/12/beach-game.jpeg',
  },
  {
    title: 'Eco Clean-up Drive',
    date: 'April 28, 2025',
    location: 'Surathkal Beach',
    description: 'Join volunteers to help clean up the beach and preserve marine life.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWvzywOcNeWBZjZ27ezgmGGozUNA0amOwZw&s',
  },
];

const EventsPage = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Row className="g-4">
        {events.map((event, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {event.date} &bull; {event.location}
                </Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Button variant="primary" size="sm" href="/register">
                  Register Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsPage;
