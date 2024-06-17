import axios from "axios";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import contImage from "../images/contact-image.jpg";
import { useInput } from "../utils/useInput";

const ContactUs = () => {
  const {
    value: fullName,
    bind: bindfullName,
    reset: resetfullName,
  } = useInput("");
  const { value: Email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: Mobno, bind: bindMobNo, reset: resetMobNo } = useInput("");
  const {
    value: Message,
    bind: bindMessage,
    reset: resetMessage,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(fullName);

    const enquryData = {
      name: fullName,
      email: Email,
      mobno: Mobno,
      message: Message,
    };
    axios
      .post("https://technoweit-apps.uc.r.appspot.com/api/enqury/create", enquryData)
      .then((res) => {
        alert("Thank You For Apply");
      })
      .catch((error) => {
        alert(error.message);
      });

    resetfullName();
    resetEmail();
    resetMobNo();
    resetMessage();
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <form id="contact-form" role="form" onSubmit={handleSubmit}>
              <div className="section-title">
                <h2>
                  Contact us <small>we love conversations. let us talk!</small>
                </h2>
              </div>

              <div class="col-md-12 col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter full name"
                  name="name"
                  required
                  {...bindfullName}
                />

                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email address"
                  name="email"
                  required
                  {...bindEmail}
                />

                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Mobile No"
                  name="mobno"
                  required
                  {...bindMobNo}
                />

                <textarea
                  class="form-control"
                  rows="6"
                  placeholder="Enter Query"
                  name="message"
                  required
                  {...bindMessage}
                ></textarea>
              </div>

              <div class="col-md-4 col-sm-12">
                <input
                  type="submit"
                  class="form-control"
                  name="send message"
                  value="Send Message"
                />
              </div>
            </form>
          </Col>

          <Col md={6} sm={12}>
            <div className="contact-image">
              <Image src={contImage} thumbnail={true} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;