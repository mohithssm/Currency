import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Nav, Col, Row } from "react-bootstrap";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import VideoClassifier from "./VideoClassifier";
import FileUpload from "./BrowseIm";

class Predictor extends React.Component {
  render() {
    return (
      <Container fluid style={{ height: "auto" }}>
        <Row style={{ paddingTop: "20px", height: "auto" }}>
          <Col md={1} lg={1}></Col>

          <Col xs={12} md={10} sm={12} lg={10}>
            <Card
              bg="transparent"
              text="light"
              border="primary"
              className="text-center"
              style={{ width: "auto", borderWidth: "3px", minHeight: "80vh" }}
            >
              <Card.Header>
                <h4>
                  <b>PREDICTOR</b>
                </h4>
              </Card.Header>
              <Card.Body>
                <TabContainer id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      lg={12}
                      md={12}
                      style={{ paddingTop: "20px", paddingBottom: "20px" }}
                    >
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Browse Image</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Web Cam</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      lg={12}
                      md={12}
                      style={{ paddingTop: "20px", paddingBottom: "20px" }}
                    >
                      <TabContent>
                        <TabPane eventKey="first">
                          <FileUpload />
                        </TabPane>
                        <TabPane eventKey="second">
                          <VideoClassifier />
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </TabContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} lg={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default Predictor;
