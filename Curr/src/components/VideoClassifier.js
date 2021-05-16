import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from "react-loader-spinner";
import useInterval from "@use-it/interval";
import Chart from "./Chart";
import Container from "react-bootstrap/Container";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./VideoClassifier.css";

let classifier;

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
        // console.log(results)
      });
    }
  }, 500);

  const toggle = () => {
    setStart(!start);
    setResult([]);
  };

  return (
    <Container>
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
      {result.length > 0 && (
        <div>
          <Chart data={result[0]} />
        </div>
      )}
      {/* {result.length > 0 && (
        <div className="results">
          <Currency data={result} />
        </div>
      )} */}
    </Container>
  );
}

export default VideoClassifier;
