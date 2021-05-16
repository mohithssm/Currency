import React from "react";
import * as ml5 from "ml5";
import Button from "react-bootstrap/Button";

let classifier;
let image;
// const [result, setResult] = useState([]);

class SingleImageUploadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  state = {
    predictions: [],
  };

  setPredictions = (pred) => {
    this.setState({
      predictions: pred,
    });
  };

  classifyImg = () => {
    classifier = ml5.imageClassifier("../../model/model.json");
    image = document.getElementById("image");
    classifier.classify(image, (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      // setResult(results);
      console.log(results);
    });
  };

  render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>
          <input
            id="input-b1"
            name="input-b1"
            type="file"
            autoFocus="autofocus"
            className="form-control"
            accept=".jpeg,.png,.jpg"
            data-browse-on-zone-click="true"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <img id="image" width="150px" height="150px" src={this.state.file} />
          <div style={{ padding: "10px" }}>
            <Button type="button" onClick={this.classifyImg}>
              Classify
            </Button>
            &nbsp;
            <input
              className="form-control form-control-lg"
              type="text"
              id="result"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleImageUploadComponent;
