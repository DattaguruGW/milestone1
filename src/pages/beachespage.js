// src/pages/BeachesPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const beaches = [
  {
    name: 'Panambur Beach',
    description: 'A clean and scenic beach famous for water sports and sunset views.',
    image: 'https://blog.moustachescapes.com/wp-content/uploads/2024/12/Jalandhar-Beach-edited.jpg',
  },
  {
    name: 'Tannirbhavi Beach',
    description: 'Known for its calm atmosphere and tree-lined shore, perfect for family visits.',
    image: 'https://dwq3yv87q1b43.cloudfront.net/public/blogs/17382425012939-1937573175.png',
  },
  {
    name: 'Surathkal Beach',
    description: 'Located near NITK, this beach is less crowded and great for relaxing.',
    image: 'https://content3.jdmagicbox.com/comp/mangalore/r4/0824px824.x824.190820104200.l5r4/catalogue/nitk-surathkal-beach-surathkal-mangalore-tourist-attraction-DdRls9eOEu.jpg',
  },
];

const BeachesPage = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Explore Beaches in Mangalore</h2>
      <Row className="g-4">
        {beaches.map((beach, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={beach.image} />
              <Card.Body>
                <Card.Title>{beach.name}</Card.Title>
                <Card.Text>{beach.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BeachesPage;
