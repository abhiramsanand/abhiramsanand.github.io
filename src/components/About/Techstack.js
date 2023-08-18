import React from "react";
import { Col, Row } from "react-bootstrap";
import { BrandCpp, LetterC, BrandJavascript, BrandPhp, BrandMantine, BrandMysql, BrandReact, BrandHtml5, BrandCss3 } from 'tabler-icons-react';
import { FaJava } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BrandCpp size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <LetterC size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrandReact size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrandMantine size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrandHtml5 size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrandCss3 size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrandJavascript size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrandMysql size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrandPhp size={48}
          strokeWidth={2} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava size={48}
          strokeWidth={2} />
      </Col>
    </Row>
  );
}

export default Techstack;
