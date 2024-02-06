import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
//import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
  <Router>
     <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/directors" component={Directors} />
    <Route exact path="/actors" component={Actors} />
  </div>;
  </Router> 
  );
}

export default App;
