import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/header-img.svg";
import Particle from "../Particle";
import Home2 from "./About";
import Type from "./Type";

function Home() {
  return (
    
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHUBHAM MISHRA</strong>
              </h1>

              <div style={{ paddingLeft:45,paddingBottom:45 ,textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 10, paddingTop:30 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </Col>
            <Home2 />
          </Row>
          
          {/* /About section */}
     
          
          
        </Container>
       
      </Container>
    
  );
}

export default Home;
