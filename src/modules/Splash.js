import React from "react";
import { Carousel } from "react-bootstrap";

class Splash extends React.Component {
  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Tacoma's Best Blonding Services</h1>
            <p className="lead">
            I am curently working in the proctor district located in the north end of Tacoma. I use the industries top brands such as KEVIN MURPHY bring out your hairs best potential so you can look and feel your best!
            </p>
          </div>
        </div>
        <Carousel className="w-100" variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 img-responsive center-block"
              src="./images/MainPFP.jpg"
              alt="Marian Anderson"
            />
            <Carousel.Caption>
              <h3>Professional Stylist</h3>
              <p>Passionate about making you look and feel your best.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/blone1.jpg"
              alt="Blonde styling"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-responsive center-block"
              src="./images/blonde2.jpg"
              alt="Blonde styling"
            />
            <Carousel.Caption>
              {/* <h3>I Specialize in Blonding</h3> */}
              {/* <p></p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default Splash;
