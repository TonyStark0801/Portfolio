import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
    
      <Container>
          <div md={8} className="home-about-description">
            <p className="home-about-body">
            Crafting Digital Marvels! I'm Shubham Mishra, 
            a coding virtuoso driven by a relentless quest for innovation. With a knack for problem-solving, 
            I engineer extraordinary solutions that push the boundaries of what's possible. From architecting 
            seamless backend systems to breathing life into captivating user experiences, I fuse creativity with 
            meticulous craftsmanship. Let's embark on a collaborative adventure, where we unravel complexities with
             ingenuity and create digital marvels that leave a lasting impact. Join me in crafting a digital landscape 
             where dreams come alive, one line of code at a time.
            </p>
            
          </div>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              FEEL FREE TO <span className="purple">CONNECT! </span>
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TonyStark0801"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mishras85003094"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubhammishra8149/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itsshubham_mishra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              </ul>
          </Col>
          
        </Row>
        
      </Container>
     
    </Container>
  );
}
export default Home2;
