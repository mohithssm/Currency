import React from "react";
import { Card, Table } from "react-bootstrap";
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
          border="primary"
          className="text-center"
          style={{
            width: "auto",
            borderRadius: "2%",
            borderWidth: "3px",
            maxWidth: "75vh",
          }}
        >
          <Card.Header>
            <h4>
              <b>ABOUT</b>
            </h4>
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-muted">
              <h4>
                <b>Indian Currency Recognisation</b>
              </h4>
            </Card.Title>
            <Card.Text>
              <blockquote className="blockquote">
                <p className="text-info" style={{ textAlign: "justify" }}>
                  This application is made to recognise the denomination of
                  currency and predict it. It recognises the currency through
                  web cam or by browsing image. This application can predict the
                  following images
                </p>
              </blockquote>
              <Table className="table table-striped table-hover">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-primary">
                    <td>10</td>
                  </tr>
                  <tr className="table-primary">
                    <td>20</td>
                  </tr>
                  <tr className="table-primary">
                    <td>50</td>
                  </tr>
                  <tr className="table-primary">
                    <td>100</td>
                  </tr>
                  <tr className="table-primary">
                    <td>200</td>
                  </tr>
                  <tr className="table-primary">
                    <td>500</td>
                  </tr>
                  <tr className="table-primary">
                    <td>2000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default About;
