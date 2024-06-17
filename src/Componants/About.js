import React from "react";
import { Container, Row,Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col md={6} sm={6}>
            <Col md={12} sm={12}>
              <div className="about-section-title">
                <h2>About Us</h2>
              </div>
            </Col>

            <Row>
              <p>
                "technoweit" is professional mobile app and website development
                company, and having a goal to provide best software services to our clients,
                . Join "technoweit" now and get one near to your  dream.
              </p>
            </Row>
          </Col>

          <Col md={6} sm={6}>
            <Col md={12} sm={12}>
              <div className="about-section-title">
                <h2>Our Mission</h2>
              </div>
            </Col>

            <Row>
              <p>
                "technoweit" have vision to provide best software services to
                our clients of modern day technologies and
                "technoweit" help for all over development. Our
                organization not only guide you to become employee but also help to
                start your career as per your choice. We just have one vision that provide
                quality services to customers at affordable price.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;