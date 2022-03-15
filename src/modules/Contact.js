import React from 'react'
import Button from "react-bootstrap/Button"
class Contact extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Contact Details</h1>
        <p className="lead">
          Insert contact details here
        </p>
        <Button href="mailto:marianyf@live.com">Email Me!</Button>
      </div>
    </div>
    )
  }
}
export default Contact;
