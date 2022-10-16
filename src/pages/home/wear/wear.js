import React from "react";
import "./wear.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";
function Wear() {
  return (
    <Container fluid className="wear">
      <Container>
        <Row className="banner">
          <Col>
            <h1>WEAR</h1>
            <h1>WITHOUT WASTE</h1>
            <p>Easy on your wallet, and the planet</p>
            <button className="Btn">EXPLORE NOW</button>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{padding: "10px 0px"}}>
        <div>
              <FaFacebook />
              <AiFillInstagram />
              <BsTwitter />
              <BsSnapchat />
            </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Wear;
