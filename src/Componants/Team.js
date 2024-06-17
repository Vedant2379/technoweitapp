import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import a1 from "../images/author-image1.jpg";
import a2 from "../images/author-image2.jpg";
import a3 from "../images/author-image3.jpg";
import a4 from "../images/author-image4.jpg";

import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

const Team = () => {
  return (
    <section id="team">
      <Container>
        <Row>
          <Col md={12} sm={12} style={{textAlign:"center"}}>
            <div>
              <h2>
                Teachers <small>Meet Professional Trainers</small>
              </h2>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="team-thumb">
              <div className="team-image">
                <img src={a1} className="img-responsive" alt="" />
              </div>
              <div className="team-info">
                <h3>Mark Wilson</h3>
                <span>I love Teaching</span>
              </div>
              <Row className="social-icon">
                <Col>
                  <Facebook className="so-icon" color="#ffffff" />
                </Col>
                <Col>
                  <Twitter color="#ffffff" />
                </Col>
                <Col>
                  <Instagram color="#ffffff" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;