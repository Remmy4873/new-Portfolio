import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Bett Remmy</span>, a 
            full-stack developer from <span className="purple">Nairobi, Kenya</span>. 
            I love crafting digital experiences that are both **beautiful and functional**. 
            Whether it's designing intuitive interfaces or building robust backend systems, 
            I turn ideas into reality with **clean, scalable code**.
            <br />
            <br />
            My core stack includes <span className="purple">Bootstrap, Javascript, React </span>for frontend, and <span className="purple">Python, Flask, MySql, Postgres </span> for backend, but I’m always 
            exploring new technologies to push boundaries. I'm particularly drawn to
             <span className="purple">  web development, product design, </span> and <span className="purple"> blockchain innovations </span>.
            <br />
            <br />
            When I’m not coding, you'll probably find me diving into new tech trends, 
            connecting with Nairobi’s creative community, or working on passion projects 
            that keep me inspired.
          </p>

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
