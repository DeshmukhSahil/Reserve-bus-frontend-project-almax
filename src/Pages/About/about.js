import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center pb-4">
                <h1 className="font-weight-bold">
                  About Us
                </h1>
              </div>
              <div className="about-us-content">
                <p>
                  Welcome to our RedBus clone app! We are passionate about providing convenient and reliable bus ticket booking services to travelers like you.
                </p>
                <p>
                  Our mission is to simplify your travel experience by offering a wide range of bus routes, comfortable seating options, and secure online booking. Whether you're planning a short commute or a long-distance journey, we've got you covered.
                </p>
                <p>
                  We take pride in our commitment to customer satisfaction and safety. Our user-friendly platform allows you to browse available trips, select your preferred seats, and complete your booking with ease. Plus, our dedicated customer support team is here to assist you every step of the way.
                </p>
                <p>
                  Thank you for choosing our RedBus clone app for your travel needs. We look forward to serving you and making your journey a memorable one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
