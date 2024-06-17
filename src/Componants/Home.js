import React from "react";

import { useRef } from "react";
import { Col, Container } from "react-bootstrap";

import OwlCarousel from "react-owl-carousel2";

const options = {
  items: 1,
  nav: false,
  rewind: true,
  autoplay: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: true,
    },
  },
};

const events = {
  onDragged: function (event) {
    console.log("onDragged: " + event.type);
  },
  onChanged: function (event) {
    console.log("onDragged: " + event.type);
  },
  onTranslate: function (event) {
    console.log("onDragged: " + event.type);
  },
};

const Home = () => {
  const carRef = useRef();
  return (
    <div id="home">
      <OwlCarousel
        className="owl-carousel owl-theme home-slider"
        ref={carRef}
        options={options}
        events={events}
      >
        <div className="item item-first">
          <div className="caption">
            <Container>
              <Col sm={12} md={6}>
                <h1>Web and Mobile App Development</h1>
                <h3>
                  Our services are designed to fit in industry
                  supporting all-round with latest technologies.
                </h3>
                <a
                  href="#courses"
                  class="section-btn btn btn-default smoothScroll"
                >
                  Discover more
                </a>
              </Col>
            </Container>
          </div>
        </div>
        <div className="item item-second">
          <div className="caption">
            <Container>
              <Col md={6} sm={12}>
                <h1>Start your journey with our projects</h1>
                <h3>
                </h3>
                <a
                  href="#courses"
                  class="section-btn btn btn-default smoothScroll"
                >
                  Take a tour
                </a>
              </Col>
            </Container>
          </div>
        </div>

        <div className="item item-third">
          <div className="caption">
            <Container>
              <Col md={6} sm={12}>
                <h1>Efficient Apps Performance</h1>
                <h3></h3>
              </Col>
            </Container>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Home;