import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DropdownButton,
  FormGroup,
  ControlLabel,
  FormControl,
  MenuItem
} from 'react-bootstrap'
import { fetchRegionLevels } from '../actions'

class ScenarioSelection extends Component {
  componentDidMount () {
    this.props.fetchRegionLevels()
  }

  selectRegionLevel (e) {
    console.log(e)
  }

  render () {
    const regionLevelButtonTitle = title => {
      title === undefined ? 'Valitse aluetaso' : 'title'
    }
    return (
      <div>
        <h3>Skenaarioiden valinta</h3>
        <br />
        <FormGroup controlId='formRegionSelect'>
          <ControlLabel>Aluetaso</ControlLabel>
          <DropdownButton
            title={this.props.regionLevel === 1 ? 'asdf' : 'trew'}
            id='regionLevelDropdownbutton'
            onSelect={this.selectRegionLevel}
          >
            {this.props.choices.regionLevels.map(choice => (
              <MenuItem key={choice.id} eventKey={choice.id}>
                {choice.name}
              </MenuItem>
            ))}
          </DropdownButton>
        </FormGroup>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  regionLevel: state.regionLevel,
  choices: state.choices
})

const mapDispatchToProps = {
  fetchRegionLevels: fetchRegionLevels
}

ScenarioSelection = connect(mapStateToProps, mapDispatchToProps)(
  ScenarioSelection
)

export default ScenarioSelection
