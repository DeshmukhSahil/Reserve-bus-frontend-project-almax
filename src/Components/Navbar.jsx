import React from "react";
import { Link } from "react-router-dom";
import logoImage from '../Assets/logoImage.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid m-1 mx-4 mb-0">
        <Link
          to="/"
          className="navbar-brand fs-3 pe-4"
          style={{ color: "white", fontWeight: "bold" }}
        >
          <img src={logoImage} alt="Redbus Logo" className="mr-2"
          style={{ width: '100px', height: 'auto' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/mybustickets"
                className="nav-link active fs-5 pe-4 fw-medium"
                aria-current="page"
                // className="navbar-brand fs-3 pe-4"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Bus Tickets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link  fs-5 fw-medium"
              style={{ color: "black", fontWeight: "bold" }}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4">
            <button
              className="btn  mx-2 fw-medium"
              style={{ color: "white", backgroundColor: "black" }}
            >
              Login
            </button>
            <button
              className="btn border border-dark fw-medium "
              style={{ color: "black", backgroundColor: "white" }}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
