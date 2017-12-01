import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import _ from 'lodash'
import { connect } from 'react-redux'
import {
  fetchRegionLevels,
  selectRegionLevel,
  fetchRegions,
  selectRegion
} from '../../actions/sidebar'
import styles from './Sidebar.scss'

class Sidebar extends Component {
  componentDidMount () {
    this.props.fetchRegionLevels()
  }

  componentWillReceiveProps (newProps) {
    var newSelectedChoices = newProps.selectedChoices
    var oldSelectedChoices = this.props.selectedChoices

    if (!newProps.pending) {
      if (newSelectedChoices.regionLevel !== oldSelectedChoices.regionLevel) {
        this.props.fetchRegions(newSelectedChoices.regionLevel)
      }
    }
  }

  render () {
    const regionLevels = this.props.availableChoices.regionLevels
    const regions = this.props.availableChoices.regions
    const scenarioCollections = regions.length === 0 ? [] : regions.find(region => region.id === this.props.selectedChoices.region).scenarioCollections
    return (
      <div className={styles.sidebar}>
        <FormGroup>
          <ControlLabel>Region level</ControlLabel>
          <FormControl
            componentClass='select'
            onChange={(e) => {
              this.props.selectRegionLevel(parseInt(e.target.value))
            }
            }
            value={this.props.selectedChoices.regionLevel}>
            {_.map(regionLevels, child => (
              <option value={child.id} key={child.id}>{child.name}</option>
            ))}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Region</ControlLabel>
          <FormControl componentClass='select'
            onChange={(e) => {
              this.props.selectRegion(parseInt(e.target.value))
            }
            }
            value={this.props.selectedChoices.region}>
            {_.map(regions, child => (
              <option value={child.id} key={child.id}>{child.name}</option>
            ))}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario collection</ControlLabel>
          <FormControl componentClass='select'>
            {_.map(scenarioCollections, child => (
              <option value={child.id} key={child.id}>{child.name}</option>
            ))}
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
      </div >
    )
  }
}

Sidebar.propTypes = {
  availableChoices: PropTypes.object.isRequired,
  selectedChoices: PropTypes.object.isRequired,
  pending: PropTypes.bool.isRequired,
  fetchRegionLevels: PropTypes.func.isRequired,
  fetchRegions: PropTypes.func.isRequired,
  selectRegionLevel: PropTypes.func.isRequired,
  selectRegion: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  availableChoices: state.sidebar.data.availableChoices,
  selectedChoices: state.sidebar.data.selectedChoices,
  error: state.sidebar.error,
  pending: state.sidebar.pending
})

const mapDispatchToProps = {
  fetchRegionLevels,
  fetchRegions,
  selectRegionLevel,
  selectRegion
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Sidebar)
