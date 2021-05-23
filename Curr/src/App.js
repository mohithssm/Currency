import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Predictor from "./components/Predictor";
// import AppFooter from "./components/AppFooter";

function App() {
  return (
    <Router>
      <BootstrapNavbar />

      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/Home" component={Home} /> */}
      <Route path="/Contact" component={Contact} />
      <Route path="/About" component={About} />
      <Route path="/Predictor" component={Predictor} />
      {/* <AppFooter /> */}


    </Router>
  );
}

export default App;
