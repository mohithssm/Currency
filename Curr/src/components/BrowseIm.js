import React, {Component, useState} from "react";
import * as ml5 from "ml5";
import {Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import GaugeChart from "react-gauge-chart";



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


    
    const classifier = ml5.imageClassifier('../../model/model.json', modelLoaded);
    
    function modelLoaded(){
        console.log('Model Loaded!');
    }


    function classifyImg(){
        classifier.classify(document.getElementById('image'), (error, results) => {
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
    return <img src={URL.createObjectURL(image)} id="image" width="150px" alt={image.name} />;
  };



  
  return (


    <Container>
    <Row>
      <Col xs={12}  sm={12} md={12}  lg={6} >
        <Card
          bg="transparent"
          text="light"
          border="warning"
          className="text-center"
          style={{
            
            borderRadius: "2%",
            borderWidth: "3px",
          }}
        >
          <Card.Header>Browse Image</Card.Header>
          <Card.Body style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
       
          
          
          <input class="form-control" input="image" type="file" onChange={handleUpload} />
          <br/>

          <div>
          {file && <ImageThumb image={file} />}
          </div>
           <div>
           <br/>

           <Button  onClick={() => toggle()} >Classify</Button>
             
           </div>

      
            
          </Card.Body>
        </Card>
      </Col>
        <Col xs={12}  sm={12} md={12}  lg={6} >
            <Card
            bg="transparent"
            text="light"
            border="warning"
            className="text-center"
            style={{
                
                borderRadius: "2%",
                borderWidth: "3px",
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


export default FileUpload
