import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MIA from "../../Assets/Projects/MIA.jpg";
import ToDoList from "../../Assets/Projects/ToDoList.jpg";
import RMS from "../../Assets/Projects/RMS.jpg";
import OneForAll from "../../Assets/Projects/OneForAll.jpg";
import FootFacts from "../../Assets/Projects/FootFacts.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">PORTFOLIO</strong>
        </h1>
        <p style={{ color: "white" }}>
        Showcasing My Recent Ventures.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RMS}
              isBlog={false}
              title="Restaurant Management System"
              description="Embark on a seamless gastronomic journey with the Restaurant Management System, a comprehensive solution designed to revolutionize the way restaurants operate. Empower managers with real-time menu updates, staff and inventory management, and booking oversight. Cashiers enjoy an integrated cash calculator, while customers can effortlessly explore menus, make advance bookings, and savor culinary delights. Revolutionize efficiency and customer satisfaction today."
              ghLink="https://github.com/abhiramsanand/Restaurant-Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoList}
              isBlog={false}
              title="ToDoList"
              description="Dive into efficiency and organization with TO-DO LIST, a dynamic web app designed to elevate your productivity. Seamlessly built using React and Bootstrap, this digital assistant brings elegance and simplicity to your daily tasks. Watch completed tasks adopt a satisfying line-through effect ushering you into the realm of achievement. Effortlessly add and organize tasks, setting your priorities with ease. With stylish simplicity, mark tasks done or remove as needed. Elevate your routine with TO-DO LIST, where efficiency meets elegance."
              ghLink="https://github.com/abhiramsanand/ToDoList"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MIA}
              isBlog={false}
              title="Movie-Info-App"
              description= " Step in to the world of cinema like never before with MOVIE-INFO-APP - the Java-powered Flutter app that brings the magic of movies to your Android device. Discover real-time lists of the latest Movie releases, complete with IMDb ratings, plots, trailers, and behind-the-scenes insights. Choose your journey by sorting between 'Top Rated' and 'Latest' films, and effortlessly build your personal 'Favorites' list. Elevate your movie-watching experience with MOVIE-INFO-APP - where every frame is a story waiting to be explored."
              ghLink="https://github.com/abhiramsanand/Movie-Info-App"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OneForAll}
              isBlog={false}
              title="One For All"
              description="Experience the future of local services with 'OneForAll', a transformative startup venture. Our web app seamlessly connects local workers specializing in tasks like cleaning, carpentry, plumbing, painting and more, directly with customers seeking these services. This innovative platform not only provides convenience but also gives local workers the exposure they deserve. Customers can browse, book, and review services while exploring options from neighboring areas, ensuring availability and choice. Stay tuned as we prepare to launch our startup website, bringing 'OneForAll' to your fingertips – where local expertise meets modern convenience."
              ghLink="https://github.com/One-For-All-Official"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FootFacts}
              isBlog={false}
              title="FootFacts"
              description="Get ready to step into the world of 'FootFacts', an upcoming React JS web app that is set to redefine your football experience. As the project takes its first steps, it promises to be a haven for football enthusiasts.This app is designed to deliver real-time updates and in-depth information on football. But what truly sets 'FootFacts' apart is its dedication to the Malayali football community. A treasure trove for football fans from Kerala, this app aims to provide a personalized touch, making it more than just a football app – it's a celebration of the spirit of Mallu football lovers. As development unfolds, we're excited to bring you the ultimate football experience – for free."
              ghLink="https://github.com/abhiramsanand/Footfacts"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
