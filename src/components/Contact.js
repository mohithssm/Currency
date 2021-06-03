import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Contact extends React.Component {
  render() {
    return (
      <Container
        fluid
        style={{
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          border="primary"
          bg="transparent"
          text="light"
          className="text-center"
          style={{
            width: "auto",
            borderRadius: "2%",
            borderWidth: "3px",
          }}
        >
          <Card.Header>
            <h4>
              <b>CONTACT</b>
            </h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>mohith</Card.Title>
            <Card.Text>
              <a href="https://www.google.com/intl/en-GB/gmail/about/#">
                mohithsekharamantri@gmail.com
              </a>
            </Card.Text>
            <Card.Title>vamsi krishna</Card.Title>
            <Card.Text>
              <a href="https://www.google.com/intl/en-GB/gmail/about/#">
                nunnavamsikrishna1998@gmail.com
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Contact;
