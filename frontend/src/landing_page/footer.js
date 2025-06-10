import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f5f5f5", color: "#404145", fontSize: "14px" }} className="pt-5 pb-3 mt-5">
      <Container>
        <Row>
          <Col xs={6} md={2} className="mb-4">
            <h5 className="fw-bold mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li>Graphics & Design</li>
              <li>Digital Marketing</li>
              <li>Writing & Translation</li>
              <li>Video & Animation</li>
              <li>Music & Audio</li>
              <li>Programming & Tech</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h5 className="fw-bold mb-3">For Clients</h5>
            <ul className="list-unstyled">
              <li>How Fiverr Works</li>
              <li>Success Stories</li>
              <li>Trust & Safety</li>
              <li>Quality Guide</li>
              <li>Fiverr Learn</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h5 className="fw-bold mb-3">For Freelancers</h5>
            <ul className="list-unstyled">
              <li>Become a Freelancer</li>
              <li>Freelancer Equity</li>
              <li>Community Hub</li>
              <li>Forum</li>
              <li>Events</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>Help & Support</li>
              <li>Trust & Safety</li>
              <li>Buying on Fiverr</li>
              <li>Selling on Fiverr</li>
              <li>Fiverr Guides</li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex align-items-center">
              <a href="#" className="me-3 text-dark"><FaFacebookF /></a>
              <a href="#" className="me-3 text-dark"><FaTwitter /></a>
              <a href="#" className="me-3 text-dark"><FaInstagram /></a>
              <a href="#" className="text-dark"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <hr />

        <Row className="mt-3">
          <Col md={6}>
            <p className="mb-0">&copy; {new Date().getFullYear()} Fiverr Clone by Rachit</p>
          </Col>
          <Col md={6} className="text-md-end">
            <span className="me-3">Terms of Service</span>
            <span className="me-3">Privacy Policy</span>
            <span>Cookies</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
