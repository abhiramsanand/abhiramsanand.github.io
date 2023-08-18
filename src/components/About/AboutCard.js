import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there,I'm  <span className="purple"> Abhiram S Anand, </span>
            and I call the vibrant town of <span className="purple">Koyilandy </span> of Kozhikode district in Kerala, India, my home.<br/>
            <br /> I'm all about tech and creativity. With a Btech in Information Technology from<span className="purple"> CUSAT, Kochi,</span>  I'm on a mission to explore the endless horizons of innovation.
            <br />
            <br/>
            Currently, I'm rocking the role of <span className="purple">Associate Software Engineer at Experion Technologies.</span> Coding is my jam, and I'm living for the thrill of turning ideas into real-world solutions.
            <br />
            <br />
            But that's not all. When I'm not coding, you can find me lost in the world of words.<span className="purple"> I write novels</span>  that transport readers to new realms, and I'm equally skilled at capturing life's essence through<span className="purple"> portrait artistry. </span>
            <br /><br />Sports? Yeah, I'm in for the win. <span className="purple">Football and cricket </span> are my go-to games. <span className="purple">Cristiano Ronaldo </span>has me cheering loud.<br/><br/>
            <span className="purple">Space and science fiction</span> intrigue me. Speaking of fascination, movies are my escape. <span className="purple">Christopher Nolan's mind-bending films</span> are right up my alley, and if there's science fiction involved, count me in.
          </p>

          <p style={{ color: "rgb(244, 195, 45, 0.6)" }}>
            " Here's to exploring, creating, and embracing every moment."{" "}
          </p>
          <footer className="blockquote-footer">ABHIRAM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
