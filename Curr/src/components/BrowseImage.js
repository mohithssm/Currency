import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import SingleImageUploadComponent from "./Browse";
import Container from "react-bootstrap/Container";

class BrowseImage extends React.Component {
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
          <Card.Header>Browse Image</Card.Header>
          <Card.Body>
            <Card.Title>Browse Image Predictor</Card.Title>
            <SingleImageUploadComponent />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default BrowseImage;
