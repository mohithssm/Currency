// import logo from "./logo.svg";
import "./App.css";
// import BootstrapNavbar from './components/BootstrapNavbar';
// import Routes from "./routes/routes.routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import BootstrapCarousel from "./components/BootstrapCarousel";

function App() {
  return (
    // <div className="App">
    <Router>
      <BootstrapNavbar />

      <Route path="/" />
      <Route path="/Home" component={Home} />
      <Route path="/Contact" component={Contact} />
      <Route path="/About" component={About} />
    </Router>
    // </div>
  );
}

export default App;
