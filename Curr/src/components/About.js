import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class About extends React.Component {
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
          bg="dark"
          text="light"
          border="light"
          className="text-center"
          style={{ width: "auto", borderRadius: "2%", borderWidth: "3px" }}
        >
          <Card.Header>
            <h4>
              <b>ABOUT</b>
            </h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default About;
