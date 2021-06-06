import React, { useState } from "react";
import * as ml5 from "ml5";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import GaugeChart from "react-gauge-chart";
import Loader from "react-loader-spinner";

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

function FileUpload() {
  const [file, setFile] = React.useState("");
  const [result, setResult] = useState([]);
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  const classifier = ml5.imageClassifier("../../model/model.json", modelLoaded);

  function modelLoaded() {
    console.log("Model Loaded!");
  }

  function classifyImg() {
    if (document.getElementById("inp").value === "") {
    }
    classifier.classify(document.getElementById("image"), (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      setResult(results);
    });
  }

  const toggle = () => {
    classifyImg();
    setResult([]);
  };

  const ImageThumb = ({ image }) => {
    return (
      <img
        style={{ objectFit: "cover" }}
        src={URL.createObjectURL(image)}
        id="image"
        width="150px"
        height="150px"
        alt={image.name}
      />
    );
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
              maxHeight: "55vh",
            }}
          >
            <Card.Header>Browse Image</Card.Header>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                className="form-control"
                type="file"
                placeholder=".jpg/.png/.jpeg supported"
                accept="image/png, image/jpeg, image/jpg"
                id="inp"
                onChange={handleUpload}
              />
              <label
                for="inp"
                style={{ padding: "5px", fontSize: "12px", color: "red" }}
              >
                Supported Formats:.jpg|.png |.jpeg
              </label>
              <div>{file && <ImageThumb image={file} />}</div>

              <div style={{ padding: "15px" }}>
                <button
                  className="btn btn-md btn-primary"
                  onClick={() => toggle()}
                >
                  <span className="sr-only">Classify...</span>
                </button>
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
              maxHeight: "55vh",
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
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FileUpload;
