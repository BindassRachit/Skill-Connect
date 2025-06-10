import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="text-center">
        <Col>
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="text-muted mb-4">Oops! The page you're looking for doesn't exist.</p>
          <Button as={Link} to="/" variant="primary">Go to Homepage</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
