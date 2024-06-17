import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section id="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <div className="footer-info">
              <div className="section-title">
                <h2>Head Office</h2>
              </div>
              <address>
                <p>
                  H No 2670,Methaji Plot, Behind Vasant Theater, Bhusawal (MH),
                  Pin Code 425201
                </p>
              </address>

              <div className="copyright-text">
                <p>Copyright &copy; 2021 technoweit</p>

                <p>Design By: technoweit team</p>
              </div>
            </div>
          </Col>

          <Col md={4} sm={6}>
            <div className="footer-info">
              <div className="section-title">
                <h2>Contact Info</h2>
              </div>
              <address>
                <p>+91 8888813277, +91 7620979777</p>
                <p>
                  <a href="mailto:Contact@technoweit.com">
                    Contact@technoweit.com
                  </a>
                </p>
              </address>
            </div>
          </Col>

          <Col md={4} sm={6}>
            <div className="footer-info">
              <div className="section-title">
                <h2>Follow Us</h2>
              </div>
              <Col className="social-container">
                <span className="fa-stack">
                  <a href="https://www.facebook.com/Technoweit-261828089010737/" target="_blank">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="https://twitter.com/AshishBendale77?s=09" target="_blank">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="https://wa.me/message/N5H5ZYJ62WSPB1" target="_blank">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-whatsapp fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="https://www.instagram.com/technoweit/" target="_blank">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="https://www.linkedin.com/in/ashish-bendale-526243195" target="_blank">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x"></i>
                  </a>
                </span>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
