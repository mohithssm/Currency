import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from "react-loader-spinner";
import useInterval from "@use-it/interval";
import Container from "react-bootstrap/Container";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./VideoClassifier.css";
import { Col, Row, Card } from "react-bootstrap";
import GaugeChart from "react-gauge-chart";

let classifier;

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  console.log(label, confidence);
  return (
          <div>
            <b>Currency</b>
          <h5 style={{ color: "#ffd11a" }}>{label}</h5>
          <b>Accuracy</b>
          
          <GaugeChart
            id="gauge-chart3"
            nrOfLevels={20}
            arcWidth={0.3}
            percent={confidence}
            style={{width:"100%"}}
          />
          </div>


  );
};


function VideoClassifier() {
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier("../../model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {

      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
      });
    }
  }, 500);

  const toggle = () => {
    setStart(!start);
    setResult([]);
  };

  return (
    <Container>
      <Row >
        <Col xs={12}  sm={12} md={12} lg={6} >
          <Card
            bg="transparent"
            text="light"
            border="warning"
            className="text-center"
            style={{
              
              borderRadius: "2%",
              borderWidth: "3px",
              minHeight: "50vh",
              
            }}
          >
            <Card.Header>Web Cam</Card.Header>
            <Card.Body style={{display:"flex", justifyContent:"center"}} >
              
              <Loader
                type="Watch"
                color="#00BFFF"
                height={100}
                width={100}
                visible={!loaded}
                style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
              />
              <div className="upper">
                <div className="capture" style={{ minWidth: "300px" }}>
                  <video
                    ref={videoRef}
                    style={{ transform: "scale(-1, 1)" }}
                    width="300"
                    height="150"
                  />
                  {loaded && (
                    <button
                      className="btn btn-lg btn-outline-success"
                      onClick={() => toggle()}
                    >
                      {start ? "Stop" : "Start"}
                    </button>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col  xs={12}  sm={12} md={12} lg={6} >

        <Card
          bg="transparent"
          text="light"
          border="warning"
          className="text-center"
          style={{
            
            borderRadius: "2%",
            borderWidth: "3px",
            minHeight: "50vh"

            
          }}
        >
          <Card.Header>Predicted Output</Card.Header>
          <Card.Body>
              {result.length > 0 && (
                <div>
              
                  <Chart data={result[0]} />
                </div>
              )}
          </Card.Body>
        </Card>
        </Col>
       


      </Row>



    </Container>
  );
}

export default VideoClassifier;
