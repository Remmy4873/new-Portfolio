import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Bett Remmy </span>
            from <span className="purple"> Nairobi, Kenya</span>
            <br />
            I am full-stack  software developer.
            <br />
            I'm passionate about building websites and applications that harmonize beauty and functionality.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> I enjoy exploring Nairobi’s creative community
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           "Let your hands craft what hearts will remember."{" "}
          </p>
          <footer className="blockquote-footer">Remmy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
