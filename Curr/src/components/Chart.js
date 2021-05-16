import React from "react";
import GaugeChart from "react-gauge-chart";
import { Card } from "react-bootstrap";
// import { Line, Circle } from "rc-progress";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  console.log(label, confidence);
  return (
    <Card
      border="light"
      text="light"
      className="text-center"
      style={{
        minWidth: "200px",
        borderRadius: "2%",
        borderWidth: "3px",
      }}
    >
      <Card.Header
        align="center"
        style={{
          color: "yellow",
          // fontSize: "20px",
        }}
      >
        <b>Classification</b>
      </Card.Header>
      <Card.Body>
        <div>
          <Card.Title>
            <b>Currency</b>
          </Card.Title>
          <h5 style={{ color: "#ffd11a" }}>{label}</h5>
        </div>
        <br></br>
        <div>
          <Card.Title>
            <b>Confidence</b>
          </Card.Title>
          <GaugeChart
            id="gauge-chart3"
            nrOfLevels={20}
            arcWidth={0.3}
            percent={confidence}
          />
        </div>
      </Card.Body>
    </Card>
  );
};
export default Chart;
