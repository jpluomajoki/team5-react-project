import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchRegionLevels, selectRegionLevel } from '../../actions/sidebar'
import styles from './Sidebar.scss'

class Sidebar extends Component {
  componentDidMount () {
    this.props.fetchRegionLevels()
  }

  render () {
    const regionLevels = this.props.state.data.availableChoices.regionLevels
    return (
      <div className={styles.sidebar}>
        <FormGroup>
          <ControlLabel>Region level</ControlLabel>
          <FormControl
            componentClass='select'
            onChange={(e) => this.props.selectRegionLevel(e.target.value)}
            value={this.props.state.data.selectedChoices.regionLevel}>
            {regionLevels.map(child => (
              <option value={child.id} key={child.id}>{child.name}</option>
            ))}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Region</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario collection</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario</ControlLabel>
          <FormControl componentClass='select' multiple>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Indicators</ControlLabel>
          <FormControl componentClass='select' multiple>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Period</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Graph type</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
      </div>
    )
  }
}

Sidebar.propTypes = {
  state: PropTypes.object.isRequired,
  fetchRegionLevels: PropTypes.func.isRequired,
  selectRegionLevel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  state: state.sidebar
})

const mapDispatchToProps = {
  fetchRegionLevels,
  selectRegionLevel
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Sidebar)
