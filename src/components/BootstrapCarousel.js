import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                  alt="10 new front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/10OldFront.png"}
                  alt="10 old note"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/20Front.png"}
                  alt="20 new front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/20OldFront.png"}
                  alt="20 old front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/50Front.png"}
                  alt="50 new front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/50OldFront.png"}
                  alt="50 old front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/100Front.png"}
                  alt="100 new front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/100OldFront.png"}
                  alt="100 old front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/200Front.png"}
                  alt="200 front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/500Front.png"}
                  alt="500 front"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"assets/img/2000Front.png"}
                  alt="2000 front"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row style={{ padding: "20px" }}>
          <Col sm={3} md={3} lg={3}></Col>
          <Col
            sm={6}
            md={6}
            lg={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              border="light"
              bg="transparent"
              text="light"
              className="text-center"
              style={{
                width: "auto",
                borderRadius: "2%",
                borderWidth: "3px",
                minWidth: "40vh",
              }}
            >
              <Card.Header>CURRENCIES</Card.Header>
              <Card.Body>
                <Card.Text>
                  <table className="table table-striped table-hover">
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
                  </table>
                </Card.Text>
                <Link to="/Predictor">
                  <Button>Click to Start prediction!</Button>
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
