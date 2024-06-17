import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import avf from "../images/avatar-2.png";
import avm from "../images/avatar-3.png";

import OwlCarousel from "react-owl-carousel2";

const options = {
  items: 2,
  nav: false,
  rewind: true,
  autoplay: false,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
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

const Testimonials = () => {
  const carRef = useRef();

  return (
    <section id="testimonial">
      <Container>
        <Row>
          <Col md={12} sm={12}>
            <div class="section-title">
              <h2>
                Testimonials <small>From our happy clients</small>
              </h2>
            </div>
          </Col>

          <OwlCarousel
            className="owl-carousel owl-theme"
            ref={carRef}
            options={options}
            events={events}
          >
            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Neha Patel</h4>
                  <span>Java Developer</span>
                </div>
                <p>
                  I have took the android app developement training from
                  technoweit. All the concepts was very clear with the practical
                  examples. After attending this session I will be able to
                  develop the projects by myself. I have done 2 projects on
                  Android. and curently woking in a Dassault systems
                </p>
              </div>
            </Col>
            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div class="tst-author">
                  <h3>Shweta Nandedkar</h3>
                  <span>Android Developer</span>
                </div>
                <p>
                  I didn't know anything about Kotlin & Android and how to code
                  and make application but you taught exactly I needed to know.
                  During training I learnt about Android App Developement.Now I
                  am looking forward to the opportunities in App Developement.
                  Thank you technoweit. It was a great experience.
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Tejal Badgujar</h4>
                  <span>Web Developer</span>
                </div>
                <p>
                  Technoweit helped me find a better way of thinking. Also
                  helped me learn the everything I needed to become an Android
                  Developer starting from basics to expert level.Thanks
                  Technoweit
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Modiksha Mahajan</h4>
                  <span>Java Developer</span>
                </div>
                <p>
                  It was my good experience.I was actually able to rediscover my
                  capabilities, also it helped in implementing my theoretical
                  knowledge into to live projects.
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Kratika Mahajan</h4>
                  <span>Android Developer</span>
                </div>
                <p>
                  I very much enjoyed this course.For those who don't know
                  anything about Android app developement, I recommend
                  technoweit as a place to start. They offer a Professional
                  Learning experience. Very helpful. Highly Recommended!
                  Thanks..
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Puja Patil</h4>
                  <span>Android Developer</span>
                </div>
                <p>
                  Ashish sir is one of the best teacher out there and certainly
                  the best ever i have seen in my life.He knows concepts right
                  at there quintessence.To sum up , just go for him....
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Vrushali Bari</h4>
                  <span>Android Developer</span>
                </div>
                <p>
                  I was student of technoweit. My experience of Android app
                  developement course is wonderful.The guidance of instructors
                  is outstanding.My project work completed very easily.
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Diksha Kolhatkar</h4>
                  <span>Web Developer</span>
                </div>
                <p>
                  The course training is awesome! The instructor spoke very
                  clear and was very knowledgeable and patient.If you have any
                  doubts you can freely ask your instructor and they will
                  definitely provide you the best solution regarding that.
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Rutu Mahajan</h4>
                  <span>Android Developer</span>
                </div>
                <p>
                  To gain knowledge, technoweit provide a great platform. The
                  teaching techniques are so good to understand.The instructor
                  was excellent. He was extremely knowledgeable, willing to help
                  student at anytime.
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avm} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Swapnil Sonawane</h4>
                  <span>Java Developer</span>
                </div>
                <p>
                  I had a great time doing with this institute and Ashish sir
                  has made it a great experience. I look forward to doing more
                  courses or projects with you guys in the future and have been
                  recommending you to everyone I know. Thank you for all the
                  assistance and feedback, it has been delightful and very
                  gratifying
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Rupali Sonawane</h4>
                  <span>Java Developer</span>
                </div>
                <p>
                  The instructor of technoweit never fail to give personal
                  attention to each of their students. When each student gets
                  personal attention they are motivated to improve further. Also
                  the institute enables healthy competition for students.
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Shital Baviskar</h4>
                  <span>Android Developer</span>
                </div>
                <p>
                  Thank you so much Sir for always building Positivism,Excellent
                  Communication Skills,Deep Knowledge of and Passion for the
                  Subject Matter,Friendly Attitude and Strong Work Ethic.
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Pooja Desale</h4>
                  <span>Java Developer</span>
                </div>
                <p>
                  Whether you are new to software programming, this is the place
                  for you to begin the journey,In technoweit you’ll learn the
                  basic to adavance concepts of software programming languages.
                </p>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="item">
                <div className="tst-image">
                  <img src={avf} class="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                  <h4>Nikita Patil</h4>
                  <span>Python Developer</span>
                </div>
                <p>
                  I have successfully completed my course from Technoweit.
                  Friendly and Motivational environment. They have guided
                  perfectly according to my educational qualification. I have
                  studied technologies and now successfully working as an
                  Android Developer Intern... Thank you Technoweit
                </p>
              </div>
            </Col>
          </OwlCarousel>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;