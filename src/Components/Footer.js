import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Styles/Footer.css";
import Socials from "../Components/Socials";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineMail,
  AiFillGoogleCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer-main-div">
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-about-section">
              <h3 className="footer-section-title">About Us</h3>
              <div className="footer-section-content-div">
                <p className="footer-section-content">
                North India’s well-known and one of the best trekking, skiing, expedition and biking organisation. The company is headquartered in Auli, Uttarakhand, an adventure hotspot. Every year, people choose Pac Auli because of our unrivalled tradition, experience, local knowledge and quality standards.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-quick-links-section">
              <h3 className="footer-section-title">Quick Links</h3>
              <div className="footer-section-content-div">
                <Link to="/categories">
                  <p className="footer-section-content">All Categories</p>
                </Link>
                <Link to="/custompackage">
                  <p className="footer-section-content">Custom Package</p>
                </Link>
                <Link to="/contactus">
                  <p className="footer-section-content">Contact Us</p>
                </Link>
                <Link to="/aboutus">
                  <p className="footer-section-content">About Us</p>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-top-packages-section">
              <h3 className="footer-section-title">Package Types</h3>
              <div className="footer-section-content-div">
                <Row>
                  <Col>
                    <Link to="/categories/0">
                      <p className="footer-section-content">Trekking</p>
                    </Link>
                    <Link to="/categories/1">
                      <p className="footer-section-content">Expedition</p>
                    </Link>
                    <Link to="/categories/2">
                      <p className="footer-section-content">Skiing</p>
                    </Link>
                    <Link to="/categories/3">
                      <p className="footer-section-content">Camping</p>
                    </Link>
                    <Link to="/categories/4">
                      <p className="footer-section-content">Spiritual Tours</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/categories/5">
                      <p className="footer-section-content">Bike Trips</p>
                    </Link>
                    <Link to="/categories/6">
                      <p className="footer-section-content">Rafting</p>
                    </Link>
                    <Link to="/categories/7">
                      <p className="footer-section-content">Cycling</p>
                    </Link>
                    <Link to="/categories/8">
                      <p className="footer-section-content">Rock Climbing</p>
                    </Link>
                    <Link to="/categories/9">
                      <p className="footer-section-content">Snowboarding</p>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-contact-section">
              <h3 className="footer-section-title">Connect With Us</h3>
              <div className="footer-section-content-div">
                <a href="tel:+917906114905">
                  <p className="footer-section-content">
                    Phone : +91-7906114905
                  </p>
                </a>
                <a href="mailto:info@pacauli.com">
                  <p className="footer-section-content">
                    Email : info@pacauli.com
                  </p>
                </a>
                <p className="footer-section-content">
                  Address : Pac Auli Office, Auli Road, Joshimath
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <div className="footer-socials">
          <a href="https://www.instagram.com/pac_auli/?hl=en">
            <AiFillInstagram className="footer-social-icon" />
          </a>
          <a href="https://www.facebook.com/Pacauli/">
            <AiFillFacebook className="footer-social-icon" />
          </a>
          <a href="mailto:info@pacauli.com">
            <AiOutlineMail className="footer-social-icon" />
          </a>
          <a href="https://www.google.com/search?q=pacauli&rlz=1C1CHBF_enIN863IN863&oq=pacauli+&aqs=chrome..69i57j69i59j69i60l6.1995j0j4&sourceid=chrome&ie=UTF-8#lrd=0x39a79dae40b6daf7:0x6564e03ad73a0fbf,1,,,">
            <AiFillGoogleCircle className="footer-social-icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCLJwNA0dOYJk3AJb-yC3MKw">
            <AiFillYoutube className="footer-social-icon" />
          </a>
        </div>
        <div className="footer-last">
          <p className="footer-copyright-content">
            Copyright © 2021 PacAuli. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
