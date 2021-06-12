import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from "react-loader-spinner";
import useInterval from "@use-it/interval";
import Container from "react-bootstrap/Container";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Col, Row, Card } from "react-bootstrap";
import GaugeChart from "react-gauge-chart";

let classifier;

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  const chartStyle = {
    height: 150,
    width: 300,
  };
  console.log(label, confidence);
  return (
    <div>
      <h3>
        <b>Currency</b>
      </h3>
      <h5 style={{ color: "#ffd11a" }}>{label}</h5>
      <h3>
        <b>Accuracy</b>
      </h3>

      <GaugeChart
        style={chartStyle}
        id="gauge-chart3"
        nrOfLevels={20}
        arcWidth={0.3}
        percent={confidence}
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
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: ["environment", "right"],
            width: 250,
            height: 200,
            frameRate: { min: 20 },
            aspectRatio: 3 / 2,
          },
        })
        .then(function (stream) {
          try {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            setLoaded(true);
          } catch (err) {
            console.log(err);
          }
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
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Card
            bg="transparent"
            text="light"
            border="primary"
            className="text-center"
            style={{
              borderRadius: "2%",
              borderWidth: "3px",
              minHeight: "55vh",
            }}
          >
            <Card.Header>Web Cam</Card.Header>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader
                type="Watch"
                color="#375a7f"
                height={100}
                width={100}
                visible={!loaded}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: "25px",
                  alignItems: "center",
                }}
              />

              <div
                className="container"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <video
                  ref={videoRef}
                  style={{
                    transform: "scale(-1, 1)",
                  }}
                />
                <br></br>
                {loaded && (
                  <button
                    className="btn btn-md btn-primary"
                    onClick={() => toggle()}
                  >
                    {start ? "Stop" : "Start"}
                  </button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6}>
          <Card
            bg="transparent"
            text="light"
            border="primary"
            className="text-center"
            style={{
              borderRadius: "2%",
              borderWidth: "3px",
              minHeight: "55vh",
            }}
          >
            <Card.Header>Predicted Output</Card.Header>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {result.length > 0 ? (
                <div>
                  <Chart data={result[0]} />
                </div>
              ) : (
                <Loader type="Puff" color="#375a7f" height={100} width={100} />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default VideoClassifier;
