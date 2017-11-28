import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import ScenarioSelection from "./ScenarioSelection";
import { Grid, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Grid>
          <Col md={3}>
            <ScenarioSelection />
          </Col>

          <Col md={6}>
            <div className="text-center">placeholder</div>
          </Col>

          <Col md={3}>
            <div className="text-center">placeholder</div>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default connect()(App);
