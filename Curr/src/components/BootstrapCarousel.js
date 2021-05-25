import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Nav, Col, Row, Button } from "react-bootstrap";
import Predictor from "./Predictor";
import { Link } from 'react-router-dom';

class BootstrapCarousel extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ padding: "20px" }}>
          <Col md={3}></Col>
          <Col md={6}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/10Front.png"}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/10OldFront.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/20Front.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/20OldFront.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/50Front.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/50OldFront.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/100Front.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/100OldFront.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/200Front.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/500Front.png"}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/2000Front.png"}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row style={{ padding: "20px" }}>
        <Col sm={3} md={3} lg={3}></Col>
        <Col sm={6} md={6} lg={6} style={{display:"flex", justifyContent:"center"}}>
        <Card
          border="light"
          bg="transparent"
          text="light"
          className="text-center"
          style={{
            width: "auto",
            borderRadius: "2%",
            borderWidth: "3px",
            minWidth:"40vh"
          }}
        >
          <Card.Header>
            {/* <h4>
              <b>BODY</b>
            </h4> */}
            CURRENCIES
          </Card.Header>
          <Card.Body>
            {/* <Card.Title></Card.Title> */}
            <Card.Text>
            <table class="table table-striped table-hover">
             
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
            <Link to="/Predictor">
            <Button>
                Click to Start prediction!
            </Button>
        </Link>
          </Card.Body>
        </Card>


        </Col>

        <Col sm={3} md={3} lg={3}></Col>
        </Row>
        
      </Container>
    );
  }
}

export default BootstrapCarousel;
