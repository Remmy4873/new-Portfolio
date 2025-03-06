import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title= "frontend-react Ecommerce"
              description= "A modern and responsive eCommerce frontend built with React.js. Features include product listings, shopping cart functionality, and a seamless user experience. Optimized for performance and usability."
              ghLink="https://github.com/Remmy4873/ecommerce-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Backend-Task Manager"
              description="A group backend project for a Task Manager application built with Flask, Provides RESTful APIs for managing tasks and user authentication. Features JWT-based authentication and efficient task handling."
              ghLink="https://github.com/nmogoko/ProjectFour-GroupFour.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog-react"
              description="A React-based blogging platform that enables users to write, edit, and publish articles seamlessly. Supports markdown formatting, instant previews, and a user-friendly interface for an enhanced writing experience."
              ghLink="https://github.com/Remmy4873/dojo-blog.git"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Backend-Night Show"
              description="A Flask-based REST API for managing a talk show’s episodes, guests, and appearances. It allows retrieving episode details, managing guest appearances, and handling database operations with SQLAlchemy. Features include CRUD operations, error handling, and seamless data integration."
              ghLink="https://github.com/Remmy4873/Late-show-codechall.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RecipeHub"
              description= "A full-stack recipe management application built with React and Flask. Users can create, view, and manage recipes with markdown support, authentication, and seamless user experience."
              ghLink="https://github.com/Remmy4873/python-p4-iam-putting-it-all-together-lab.git"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Database-Many-to-Many"
              description="A Flask-based application for managing employees, projects, meetings, and assignments. It features a relational database with many-to-many relationships, allowing seamless tracking of employee participation in projects and meetings."
              ghLink="https://github.com/Remmy4873/python-p4-v2-many-many-relationships.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
