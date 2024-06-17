import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Features = () => {
  return (
    <Container>
      <Row>
        <Col md={4} sm={6}>
          <div className="feature-thumb">
            <span>01</span>
            <h3>Mobile App Development</h3>
            <p>We offer Android and IOS apps development services to our clients. 
             </p>
          </div>
        </Col>

        <Col md={4} sm={6}>
          <div className="feature-thumb">
            <span>02</span>
            <h3>Website Development</h3>
            <p>We provide responsive web site development products also.</p>
          </div>
        </Col>

        <Col md={4} sm={4}>
          <div className="feature-thumb">
            <span>03</span>
            <h3>Client Satisfaction</h3>
            <p>We focuses on client Satisfaction.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;