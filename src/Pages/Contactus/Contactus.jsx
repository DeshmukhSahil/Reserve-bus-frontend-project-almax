import React from 'react'
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

function Contactus() {
    return (
        <>
            <Navbar />
            <div name="contact" className="pt-5 pb-10"
             style={{
                background: "linear-gradient(to left, white,#17a2,white)"
              }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="pb-4 text-center">
                                <h2 className="font-weight-bold pb-2">
                                    <span className="border-bottom border-primary">Contact</span>
                                </h2>
                            </div>
                            <form action="https://getform.io/f/4749c75d-1ad6-4d4a-be1f-f48e3c66b8cc" method="POST">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control m-3" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control m-3" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" className="form-control m-3" placeholder="Enter your message" rows="8" style={{ resize: "none" }} required></textarea>
                                </div>
                                <div className="form-group text-center mb-3">
                                    <button type="submit" className="btn btn-lg btn-block" style={{ color: "white", backgroundColor: "black" }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contactus