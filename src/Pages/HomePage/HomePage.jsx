import React, { useEffect, useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faCalendar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import bgImage from "../../Assets/bg.png";
import webreferal from "../../Assets/webreferal.png";
import below from "../../Assets/below.jpg"
import offer1 from "../../Assets/offer1.PNG";
import offer2 from "../../Assets/offer2.PNG";
import offer3 from "../../Assets/offer3.PNG";
import offer4 from "../../Assets/offer4.PNG";
import primo from "../../Assets/primo.PNG";
import primo1 from "../../Assets/primo1.PNG";
import primo2 from "../../Assets/primo2.PNG";
import primo3 from "../../Assets/primo3.PNG";
import CustomMessege from "../../Components/CustomMessage";

const apiUrl = "https://reservebus-36ih.onrender.com";

function HomePage() {
  const Navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${apiUrl}/api/tripsbyquery`, {
        params: {
          from: formData.source,
          to: formData.destination,
          date: new Date(formData.date).getTime(),
        },
      });

      const data = response.data.data;
      console.log(data);
      setFormData({
        source: "",
        destination: "",
        date: "",
      });

      Navigate("/Busroutes", { state: { data: data } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Show the custom alert when the component mounts
    setShowAlert(true);
  }, []);

  const handleAlertClose = () => {
    // This function will be called when the user closes the custom alert
    setShowAlert(false);
  };

  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Navbar />
      <hr className="mt-0  bg-dark lh-4" />
      <Row
        className="d-flex justify-content-center my-3 pb-auto bg-gray-400 "
        style={backgroundImage}
      >
        <Col className="col-md-6 ">
          <Form
            onSubmit={handleSubmit}
            className="p-5"
            style={{
              marginTop: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex flex-wrap justify-content-between mb-4">
              <FormGroup className="mb-4 flex-grow-1 me-2">
                <Label for="source" className="text-muted">
                  <strong style={{ color: 'rgb(245, 66, 120)', fontFamily:"cursive", fontWeight:"bolder", backgroundColor:"white"}}>
                    <FontAwesomeIcon icon={faMapMarker}  style={{ color: 'rgb(245, 66, 120)' }}/> From
                  </strong>
                </Label>
                <Input
                  type="text"
                  name="source"
                  id="source"
                  placeholder="Enter Source"
                  value={formData.source}
                  onChange={handleChange}
                  style={{ borderColor: 'black',borderWidth: '2px', borderStyle: 'solid' }}    
                />
              </FormGroup>

              <FormGroup className="mb-4 flex-grow-1 me-2">
                <Label for="destination" className="text-muted">
                  <strong  style={{ color: 'rgb(245, 66, 120)' }}>
                    <FontAwesomeIcon icon={faMapMarker}  style={{ color: 'rgb(245, 66, 120)' }}/> To
                  </strong>
                </Label>
                <Input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Enter Destination"
                  value={formData.destination}
                  onChange={handleChange}
                  style={{ borderColor: 'black',borderWidth: '2px', borderStyle: 'solid' }}  
                />
              </FormGroup>

              <FormGroup className="mb-4 flex-grow-1 me-2">
                <Label for="date" className="text-muted">
                  <strong   style={{fontFamily:"cursive", fontWeight:"bolder", backgroundColor:"white" }}>
                    <FontAwesomeIcon icon={faCalendar}/> Date of Journey
                  </strong>
                </Label>
                <Input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{ backgroundColor: "#f54278", color: "white", borderColor: 'black',borderWidth: '2px', borderStyle: 'solid' }}
                />
              </FormGroup>

              <Button
                type="submit"
                className="btn btn-lg mt-2"
                style={{
                  fontWeight: "bolder",
                  backgroundColor: "#f54278",
                  color: "white",
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                SEARCH BUSES
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <div style={{width:"100%"}}>
      <img src={below} alt="img1"  style={{width:"100%"}}/>
      </div>
      <p
        className="px-5 d-flex justify-content-center"
        style={{
          fontWeight: "bold",
          marginTop: "3rem",
          fontFamily: "sans-serif",
          fontSize: "30px",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "center",
          textShadow: "2px 2px #ccc",
        }}
      >
        Trending Offers
      </p>
      <Row className="justify-content-center p-4">
        <Col
          xs={12}
          md={4}
          className="mb-4"
          style={{ height: "300px", width: "300px" }}
        >
          <div className="card shadow">
            <img className="card-img-top" src={offer1} alt="img1" />
            <div className="card-body">
              <h5 className="d-flex justify-content-center">Limited time offer</h5>
              <p className="d-flex justify-content-center text-muted">
              Save big on travelling with us
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="mb-4"
          style={{ height: "300px", width: "300px" }}
        >
          <div className="card shadow">
            <img className="card-img-top" src={offer2} alt="img2" />
            <div className="card-body">
              <h5 className="d-flex justify-content-center">Savings</h5>
              <p className="d-flex justify-content-center text-muted">
              Exclusive discounts just for you
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="mb-4"
          style={{ height: "300px", width: "300px" }}
        >
          <div className="card shadow">
            <img className="card-img-top" src={offer3} alt="img3" />
            <div className="card-body">
              <h5 className="d-flex justify-content-center">Discount offer</h5>
              <p className="d-flex justify-content-center text-muted ">
              Discounts await your click
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="mb-4"
          style={{ height: "300px", width: "300px" }}
        >
          <div className="card shadow">
            <img className="card-img-top" src={offer4} alt="img1" />
            <div className="card-body">
              <h5 className="d-flex justify-content-center">Hurry!</h5>
              <p className="d-flex justify-content-center text-muted">
              Deals you can't miss.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{width:"100%"}}>
      <img src={primo} alt="img1"  style={{width:"100%"}}/>
      </div>
      <div style={{height:"20px"}}>

      </div>
      <div style={{width:"100%"}}>
      <Row className="justify-content-center p-4">
        <Col
          xs={12}
          md={4}
          className="mb-4"
          style={{ height: "300px", width: "300px" }}
        >
          <div className="card shadow" style={{borderRadius:"25px"}}>
            <img className="card-img-top" src={primo1} alt="img1" style={{borderRadius:"25px"}} />
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="mb-4"
          style={{ height: "300px", width: "300px" }}
        >
          <div className="card shadow" style={{borderRadius:"25px"}}>
            <img className="card-img-top" src={primo2} alt="img1" style={{borderRadius:"25px"}}/>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="mb-4"
          style={{ height: "300px", width: "300px" }}
        >
          <div className="card shadow" style={{borderRadius:"50px"}}>
            <img className="card-img-top" src={primo3} alt="img1" style={{borderRadius:"25px"}}/>
            </div>
        </Col>
        </Row>
      <img src={webreferal} alt="img1"  style={{width:"100%"}}/>
      </div>
      <Footer />
       {/* Render the custom alert component when showAlert is true */}
       {showAlert && (
        <CustomMessege
          message="Check the journey from Nagpur-Pune or Pune-Nagpur on date 15-09-2023 OR from Nashik-Dhule or Dhule-Nashik on date 28-09-2023"
          onClose={handleAlertClose}
        />
      )}
    </>
  );
}

export default HomePage;
