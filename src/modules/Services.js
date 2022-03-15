import React from "react";
import { Card, Button } from "react-bootstrap";

class Services extends React.Component {
  render() {
    return (
      <>
        <Card className="text-center mb-5">
          <Card.Header>Featured Service: Blonding</Card.Header>
          <Card.Body>
            <Card.Title>Blonding your hair to desired tone</Card.Title>
            <Card.Text>
              Ensures excellent color and hair quality
            </Card.Text>
            <Button href="https://www.vagaro.com/hairbymarian" variant="primary">Book Appointment!</Button>
          </Card.Body>
          <Card.Footer className="text-muted">$80.00</Card.Footer>
        </Card>
        <Card className="text-center mb-5">
          <Card.Header>Featured Service: Mens Cut</Card.Header>
          <Card.Body>
            <Card.Title>Mens Hair cuts</Card.Title>
            <Card.Text>
              Prefered style to be completed 
            </Card.Text>
            <Button href="https://www.vagaro.com/hairbymarian" variant="primary">Book Appointment!</Button>
          </Card.Body>
          <Card.Footer className="text-muted">$40.50</Card.Footer>
        </Card>
        <Card className="text-center mb-5">
          <Card.Header>Featured Service: Womans Cut</Card.Header>
          <Card.Body>
            <Card.Title>Womans Hair cuts</Card.Title>
            <Card.Text>
              Prefered style to be completed 
            </Card.Text>
            <Button href="https://www.vagaro.com/hairbymarian" variant="primary">Book Appointment!</Button>
          </Card.Body>
          <Card.Footer className="text-muted">$35.50</Card.Footer>
        </Card>
      </>
    );
  }
}

export default Services;
