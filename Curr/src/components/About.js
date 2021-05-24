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
          bg="transparent"
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
            <Card.Title class="text-info">Indian Currency Recognisation</Card.Title>
            <Card.Text >
            <blockquote class="blockquote">
            <p class="text-warning" style={{textAlign:"center"}}>
              This application is made to recognise the denomination of currency and predict it.
               It recognises the currency through web cam or by browsing image. This application
                can predict the following images
                </p>
            </blockquote>
                <ul style={{listStyleType:"none",alignItems:"center"}}>
                <li class="list-group-item list-group-item-action">10</li>
                <li class="list-group-item list-group-item-action">20</li>
                <li class="list-group-item list-group-item-action">50</li>
                <li class="list-group-item list-group-item-action">100</li>
                <li class="list-group-item list-group-item-action">200</li>
                <li class="list-group-item list-group-item-action">500</li>
                <li class="list-group-item list-group-item-action">2000</li>
              </ul>
              
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default About;
