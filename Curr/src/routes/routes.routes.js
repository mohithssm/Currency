import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../bootstrap.min.css";

export default function Routes() {
  return (
    <div>
      {/* <BootstrapNavbar /> */}
      <Link to="/Home" />
      <Link to="/Contact" />
      <Link to="/About" />
    </div>
    // <Router>
    // 	<BootstrapNavbar />
    // 	<Switch>
    // 		<Route path="/Home" component={Home} />
    // 		<Route path="/Contact" component={Contact} />
    // 		<Route path="/About" component={About} />
    // 	</Switch>
    // </Router>
  );
}
