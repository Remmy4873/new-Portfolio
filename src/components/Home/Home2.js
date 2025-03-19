import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WEAVING LOGIC INTO <span className="purple"> REALITY </span>
            </h1>
            <p className="home-about-body">
              Technology is moving fast—AI is getting smarter, Machine Learning is automating decisions,  
              and Cybersecurity is the frontline defense against digital threats.  
              Every app, every system, and every algorithm we write plays a part in shaping this landscape.  
              <br />
              <br />
              Software isn’t just about getting things to work—it’s about making them <strong>efficient, secure, and intelligent</strong>.  
              From crafting clean, scalable code to exploring how AI enhances everyday applications,  
              there’s always something new to learn and experiment with.  
              <br />
              <br />
              Backend logic, front-end experiences, or just optimizing a few lines of JavaScript— 
              I’m always in the zone, breaking things apart just to build them back better.  
              <br />
              <br />
              Feel free to explore and get to know more about me—who knows, you might stumble upon something interesting!  
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
