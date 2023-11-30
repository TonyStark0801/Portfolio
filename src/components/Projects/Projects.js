import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import instantly from "../../Assets/Projects/instantly.png";


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
              imgPath={instantly}
              title="Instantly"
              description="Instantly is an open-source, freeware, easy-to-use, Peer-to-Peer (P2P) file transfer application for Android devices. It allows users to share any type of file (apps, multimedia, documents, etc.) at lightning speed without any limitations on file size or format, using the latest Wi-Fi Direct technology. Instantly comes with amazing features and capabilities, listed below."
              ghLink="https://github.com/TonyStark0801/Instantly"
              demoLink="https://instantly-transfer.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instantly}
              title="Project 2"
              description="Here we go again!!!"
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instantly}
              title="Project 3"
              description="Will be filled later. No time for now"
              ghLink="#"
              demoLink="#"              
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
