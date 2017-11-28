import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DropdownButton,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { fetchRegionLevels } from "../actions";

class ScenarioSelection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchRegionLevels();
  }

  render() {
    return (
      <div>
        <h3>Skenaarioiden valinta</h3>
        <br />
        <FormGroup controlId="formRegionSelect">
          <ControlLabel>Aluetaso</ControlLabel>
          <FormControl componentClass="select" placeholder="Valitse aluetaso">
            {/* TODO:  load these dynamically */}
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  regionLevel: state.regionLevel;
};

const mapDispatchToProps = () => {
  fetchRegionLevels: fetchRegionLevels;
};

ScenarioSelection = connect(mapDispatchToProps, mapDispatchToProps)(
  ScenarioSelection
);

export default ScenarioSelection;
