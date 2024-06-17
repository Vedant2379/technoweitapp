import React, { useRef } from "react";

import { Col, Container, Row } from "react-bootstrap";


import android from "../images/ic kang/ic_android.png";
import kotlin from "../images/ic kang/ic_kotlin.png";
import java from "../images/ic kang/ic_java.jpg";
import js from "../images/ic kang/ic_js.png";
import html from "../images/ic kang/ic_html_css.png";
import python from "../images/ic kang/ic_py.png";

import OwlCarousel from "react-owl-carousel2";

const options = {
  items: 3,
  nav: false,
  rewind: true,
  autoplay: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
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

const Courses = () => {
  const carRef = useRef();

  return (
    <section id="courses">
      <Container>
        <Row>
          <Col md={12} sm={12}>
            <div className="section-title">
              <h1>Our Services</h1>
            </div>
          </Col>
        </Row>
        <OwlCarousel
          className="owl-carousel owl-theme"
          ref={carRef}
          options={options}
          events={events}
        >

          <Col sm={4} md={4}>
            <div className="item">
              <div class="courses-thumb">
                <div className="courses-top">
                  <div className="courses-image">
                    <img src={android} className="img-responsive" alt="" />
                  </div>
                </div>

                <div className="courses-detail">
                  <h3>
                    Android Development
                  </h3>
                  <p>
                    Android App Development on multiple domains like ecommerce etc{" "}
                  </p>
                </div>
                <div className="courses-info"></div>
              </div>
            </div>
          </Col>

          <Col sm={4} md={4}>
            <div className="item">
              <div class="courses-thumb">
                <div className="courses-top">
                  <div className="courses-image">
                    <img src={java} className="img-responsive" alt="" />
                  </div>
                </div>

                <div className="courses-detail">
                  <h3>
                    Java Programming
                  </h3>
                  <p>
                    We choose Java for our products development{" "}
                  </p>
                </div>
                <div className="courses-info"></div>
              </div>
            </div>
          </Col>

          <Col sm={4} md={4}>
            <div className="item">
              <div class="courses-thumb">
                <div className="courses-top">
                  <div className="courses-image">
                    <img src={kotlin} className="img-responsive" alt="" />
                  </div>
                </div>

                <div className="courses-detail">
                  <h3>
                    Kotlin Programming
                  </h3>
                  <p>
                    We choose Kotlin for our Android app development.{" "}
                  </p>
                </div>
                <div className="courses-info"></div>
              </div>
            </div>
          </Col>

          <Col sm={4} md={4}>
            <div className="item">
              <div class="courses-thumb">
                <div className="courses-top">
                  <div className="courses-image">
                    <img src={js} className="img-responsive" alt="" />
                  </div>
                </div>

                <div className="courses-detail">
                  <h3>
                    JavaScript
                  </h3>
                  <p>
                    JavaScript use for responsive websites projects.{" "}
                  </p>
                </div>
                <div className="courses-info"></div>
              </div>
            </div>
          </Col>
        </OwlCarousel>
      </Container>
    </section>
  );
};

export default Courses;
