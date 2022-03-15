import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component {
  render() {
    return (
      <Container className="text-center mt-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-6">Marians Hair</h1>
            <Container>
              <SocialIcon url="https://www.instagram.com/marianyaaaaa" />
            </Container>
            <p>
            Copyright &copy; Marian Anderson - All right reserved
            </p>
          </div>
        </div>
      </Container>
    );
  }
}
