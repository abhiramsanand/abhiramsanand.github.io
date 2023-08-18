import React from "react";
import "./TextFadeIn.css"; 
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="type-fade-in">
      <Typewriter
        options={{
          strings: [
            "Associate Software Engineer",
            "At Experion Technologies",
            "React JS Developer",
            "Freelancer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 10,
        }}
      />
    </div>
  );
}

export default Type;
