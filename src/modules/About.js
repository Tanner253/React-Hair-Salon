import React, { Component } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <>
      <Container className="text-center">
        <Col>
        <Row xs={1} sm={1} md={2} lg={2}>
        <Card style={{ width: "35rem" }}>
          <Card.Img variant="top" src="./images/PFP.jpg" />
          <Card.Body>
            <Card.Title>Marian Anderson</Card.Title>
            <Card.Text>
              List work and pitch here
            </Card.Text>
            <Button href="https://www.vagaro.com/hairbymarian">Book Me!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "35rem" }}>
          <Card.Img variant="top" src="./images/ID.PNG" />
          <Card.Body>
            <Card.Title>Tanner Percival - Developer</Card.Title>
            <Card.Text>
              Full Stack Software Developer in ASP.NET Core / Node.js
            </Card.Text>
            <Button  className="mr-4" href="https://github.com/Tanner253">Github</Button>
            <Button className="mr-4" href="https://www.linkedin.com/in/tannerperc/">LinkedIn</Button>
            <Button  href="mailto:percivaltanner@gmail.com">Email</Button>
          </Card.Body>
        </Card>
        </Row>
        </Col>
      </Container>
      </>
    );
  }
}
