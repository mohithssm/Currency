import React from "react";
import Card from "react-bootstrap/Card";
import VideoClassifier from "./VideoClassifier";
import Container from "react-bootstrap/Container";

class Webcam extends React.Component {
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
          border="warning"
          className="text-center"
          style={{
            minWidth: "280px",
            borderRadius: "2%",
            borderWidth: "3px",
          }}
        >
          <Card.Header>Web Cam</Card.Header>
          <Card.Body>
            <Card.Title>Web Cam Predictor</Card.Title>
            <VideoClassifier />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Webcam;
