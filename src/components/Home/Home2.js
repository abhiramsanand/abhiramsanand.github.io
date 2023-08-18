import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
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
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME <span className="purple"> TO UNVEIL </span> MYSELF
            </h1>
            <p className="home-about-body">
              A Cusat alumnus with a degree in B.Tech Information Technology, <b className="purple">I've ventured into the realm of tech as an Associate Software Engineer at Experion Technologies.</b> Proficient in the art of CPP coding and well-versed in React JS, I wield my skills with passion.
              <br />
              <br />I forged my path even before graduation, serving as a Front-End Developer Intern at Gohiver Private Limited.
              <i>
                <b className="purple"> With an insatiable curiosity for development and innovation, I thrive on crafting digital solutions. </b>
              </i>
              <br />
              <br />
              <b className="purple">Beyond the realm of coding, I lead a life rich in variety. &nbsp;</b>
              <i>
                From crafting intricate portraits to mastering FIFA on my PC, and from penning captivating novels to chasing after a football, I embrace a diverse range of passions.  
              </i>
              <br />
              <br />
              Join me on this journey of <b className="purple">pixels, codes, and creativity.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>GET IN TOUCH</h1>
            <p>
              Reach out anytime. <span className="purple">I'M HERE </span> to connect with you.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abhiramsanand"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/abhiramsanand3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhiram-s-anand-147243198/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abhiram_s_anand/"
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
