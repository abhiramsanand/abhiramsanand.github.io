import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MIA from "../../Assets/Projects/MIA.jpg";
import ToDoList from "../../Assets/Projects/ToDoList.jpg";
import RMS from "../../Assets/Projects/RMS.jpg";
import OneForAll from "../../Assets/Projects/OneForAll.jpg";
import LCU from "../../Assets/Projects/lcu.jpg";
import caddworld from '../../Assets/Projects/caddworld.jpg'

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
              imgPath={caddworld}
              isBlog={false}
              title="Cadd World Group"
              description="As a freelance web developer, I crafted the website for Cadd World, a premier Autodesk-affiliated educational institute in Kozhikode. The dynamic site highlights courses in AutoCAD, 3ds Max, STAAD.Pro, and more, covering BIM, Civil, Infrastructure Designing, Mechanical, MEP, Electrical, Piping, and Project Management. The responsive design, intuitive navigation, and emphasis on affiliation with Autodesk contribute to an engaging online presence, aligning with Cadd World's commitment to excellence in CADD education."
              demoLink="https://caddworldgroup.com/"
            />
          </Col>

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
              description=" Step in to the world of cinema like never before with MOVIE-INFO-APP - the Java-powered Flutter app that brings the magic of movies to your Android device. Discover real-time lists of the latest Movie releases, complete with IMDb ratings, plots, trailers, and behind-the-scenes insights. Choose your journey by sorting between 'Top Rated' and 'Latest' films, and effortlessly build your personal 'Favorites' list. Elevate your movie-watching experience with MOVIE-INFO-APP - where every frame is a story waiting to be explored."
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
              imgPath={LCU}
              isBlog={false}
              title="LokiVerse"
              description="LokiVerse is a dynamic and immersive website dedicated to exploring the cinematic universe crafted by director Lokesh Kanagaraj. Focused on films like Kaithi, Vikram, and Leo, LokiVerse invites visitors into a realm where stories unfold and characters come to life. From visually captivating posters to soul-stirring songs, the Gallery showcases the richness of Lokesh's creations. Dive into the Characters page for insights into iconic personalities like Dilli, Vikram, and Leo Das. Stay updated on the latest developments with the News section, and discover the upcoming additions to the LCU. Explore, engage, and immerse yourself in Lokesh's captivating world."
              ghLink="https://github.com/abhiramsanand/Lokiverse.git/"
              demoLink="https://lokiverse.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
