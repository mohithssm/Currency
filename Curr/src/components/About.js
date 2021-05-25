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
          style={{ width: "auto", borderRadius: "2%", borderWidth: "3px", maxWidth:"75vh" }}
        >
          <Card.Header>
            <h4>
              <b>ABOUT</b>
            </h4>
          </Card.Header>
          <Card.Body>
            <Card.Title class="text-info"><h4>Indian Currency Recognisation</h4></Card.Title>
            <Card.Text >
              <blockquote class="blockquote">
                <p class="text-warning" style={{textAlign:"justify"}}>
                  This application is made to recognise the denomination of currency and predict it.
                  It recognises the currency through web cam or by browsing image. This application
                  can predict the following images
                </p>
              </blockquote>
              <table class="table table-striped table-hover">
                <thead>
                  <tr class="table-primary">
                    <th scope="col">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-primary">
                    <td scope="col">10</td>
                  </tr>
                  <tr class="table-primary">
                    <td scope="col">20</td>
                  </tr>
                  <tr class="table-primary">
                    <td scope="col">50</td>
                  </tr>
                  <tr class="table-primary">
                    <td scope="col">100</td>
                  </tr>
                  <tr class="table-primary">
                    <td scope="col">200</td>
                  </tr>
                  <tr class="table-primary">
                    <td scope="col">500</td>
                  </tr>
                  <tr class="table-primary">
                    <td scope="col">2000</td>
                  </tr>
                  </tbody>
              </table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default About;
