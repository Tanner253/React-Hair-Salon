import React from "react";
import { Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
      <div >
        {/* <Container className="text-center mt-3" > */}
          <div className="footer"  >
            <div >
              <h1 className="display-6">
                Marian @HairPoetic on Proctor, Tacoma Wa
              </h1>
              <Container>
                <SocialIcon url="https://www.instagram.com/marianyaaaaa" />
              </Container>
              <p className="lead">
                Copyright &copy; Marian Anderson - All rights reserved
              </p>
            </div>
          </div>
        {/* </Container> */}
      </div>
    );
}
