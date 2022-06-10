import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

export default function About(){
    return (
      <>
      <Container className="text-center mt-4">
        <Row xs={1} sm={1} md={2} lg={2} xl={2}>
        <Col>
        <Card className="mb-4">
          <Card.Img variant="top" src="./images/headshot.jpg" />
          <Card.Body>
            <Card.Title>Marian Anderson</Card.Title>
            <Card.Text>
              List work and pitch here
            </Card.Text>
            <Button className="btn-success" href="https://www.vagaro.com/hairbymarian">Book Me!</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card >
          <Card.Img variant="top" src="./images/ID.PNG" />
          <Card.Body>
            <Card.Title>Tanner Percival - Developer</Card.Title>
            <Card.Text>
              Full Stack Software Developer in ASP.NET Core / Node.js
            </Card.Text>
            <Button  className="mr-4 btn-success" href="https://github.com/Tanner253">Github</Button>
            <Button className="mr-4 btn-success" href="https://www.linkedin.com/in/tannerperc/">LinkedIn</Button>
            <Button  className="btn-success" href="mailto:percivaltanner@gmail.com">Email</Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>
      </Container>
      </>
    );
}
