import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ChrstSean </span>
            from <span className="purple"> Philippines .</span>
            <br />
            I am a student that have the ability to make you a website using chatgpt. I am an aspiring technology professional with a strong passion for software development, game design, and cybersecurity. My goal is to build innovative and immersive digital experiences while ensuring they are secure and reliable. I am continuously learning new programming languages, exploring game engines, and studying cybersecurity principles to become well-rounded in all aspects of tech. As a future developer, I aim to combine creativity with technical expertise to build software and games that not only entertain but also protect users in an increasingly digital world.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing some side quest to go to a pageant
            </li>
            <li className="about-activity">
              <ImPointRight /> Having a love one's to rely on 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Choose whats make you do it easy!"{" "}
          </p>
          <footer className="blockquote-footer">ChrstSean</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
