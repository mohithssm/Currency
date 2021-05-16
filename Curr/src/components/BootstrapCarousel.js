import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import BrowseImage from "./BrowseImage";
import Webcam from "./Webcam";
import { Nav, Col, Row } from "react-bootstrap";

import { Tab } from "react-bootstrap";

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
          <Col md={3}></Col>
          <Col md={6}>
            <Card
              bg="dark"
              text="light"
              border="light"
              className="text-center"
              style={{ width: "auto", borderWidth: "3px", borderRadius: "2%" }}
            >
              <Card.Header>
                <h4>
                  <b>PREDICTOR</b>
                </h4>
              </Card.Header>
              <Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Browse Image</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Web Cam</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      {/* </Col> */}
                      {/* <Col sm={12} > */}
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <BrowseImage />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Webcam />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    );
  }
}

export default BootstrapCarousel;
