import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpg";
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.webp";
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
              title="Personal Finance Tracker (Web or Mobile App)"
              description="Tech Stack: React/Flutter + Node.js + MongoDB/PostgreSQL

Features: Expense/income logging, data visualization, category budgets, user authentication.

Why It’s Valuable: Demonstrates full-stack skills, UI/UX design, and secure data handling."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Team Collaboration Tool (Like a Mini Trello or Slack)"
              description="Tech Stack: Django or Express + WebSockets + PostgreSQL

Features: Task boards, real-time chat, file sharing, notifications, role-based access.

Why It’s Valuable: Shows your ability to build real-time, scalable applications.

"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" 2D Platformer Game"
              description="Tools: Unity or Godot + C# or GDScript

Features: Multiple levels, collectibles, power-ups, enemies, and save/load system.

Why It’s Valuable: Shows gameplay mechanics, animation, physics, and level design."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=" Multiplayer Card Game (e.g., Uno or Poker)"
              description="Tools: Unity + Photon/Netcode for Multiplayer + Node.js Backend

Features: Real-time multiplayer, matchmaking, leaderboard, chat.

Why It’s Valuable: Demonstrates multiplayer networking, game logic, and user interface skills.

"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=" Vulnerability Scanner (Mini version of Nessus or OpenVAS)"
              description="Tech Stack: Python + Nmap/Scapy + Flask GUI

Features: Port scanning, OS fingerprinting, weak service detection, basic reporting.

Why It’s Valuable: Shows knowledge of networking, security auditing, and ethical hacking tools."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Secure File Vault with Encryption"
              description="Tech Stack: Python or Java + AES/RSA Encryption + Tkinter GUI

Features: File upload, encrypted storage, password protection, recovery mechanism.

Why It’s Valuable: Demonstrates understanding of encryption algorithms and secure app design.

"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
