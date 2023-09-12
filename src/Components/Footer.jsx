import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faInfoCircle,
  faPhone,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4" style={{ background: "linear-gradient(to bottom, white, #343a40)" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-decoration-none text-dark">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-decoration-none text-dark">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5">
            <h2 style={{ fontWeight: "bold", color: "#000" }}>
              <span style={{ color: "#dc3545" }}>RESERVE</span>
              <span style={{ color: "#000" }}>BUS</span>
            </h2>
            <p className="text-start text-dark">
              Your trusted partner for bus ticket bookings. We provide
              convenient and hassle-free bus reservations for all major cities.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Bookings</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/mybustickets" className="text-decoration-none text-dark">
                  <FontAwesomeIcon icon={faTicketAlt} className="me-2" />
                  Bus Tickets
                </Link>
              {/* </li>
              <li> */}
                <Link to="/Busroutes" className="text-decoration-none text-dark" style={{margin:"10px"}}>
                  <FontAwesomeIcon icon={faRoute} className="me-2" />
                  Bus Routes
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <div className="text-center">
              <h5>Follow Us</h5>
            </div>
            <ul className="list-inline d-flex justify-content-center align-items-center">
              <li className="list-inline-item me-4">
                <a href="/" className="text-decoration-none">
                  <FontAwesomeIcon icon={faFacebook} size="2x" className="text-dark" />
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="/" className="text-decoration-none">
                  <FontAwesomeIcon icon={faTwitter} size="2x" className="text-dark" />
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="/" className="text-decoration-none">
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="text-dark" />
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="/" className="text-decoration-none">
                  <FontAwesomeIcon icon={faGithub} size="2x" className="text-dark" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-decoration-none">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-dark" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="container text-center border-top py-3">
          <p className="text-light" style={{ fontFamily: "Arial, sans-serif" }}>
            &copy;  All Rights Reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
