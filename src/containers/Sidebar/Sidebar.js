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
  selectRegion,
  selectScenarioCollection,
  fetchScenarios,
  selectScenarios,
  selectIndicators,
  selectPeriod
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
      if (newSelectedChoices.scenarioCollection !== oldSelectedChoices.scenarioCollection) {
        this.props.fetchScenarios(newSelectedChoices.scenarioCollection, newSelectedChoices.region)
      }
    }
  }

  handleMultipleSelectValueChange = (ref) => (event) => {
    const values = [].map.call(this[ref].selectedOptions, option => option.value)

    const fakeEvent = {}
    fakeEvent.target = {}
    fakeEvent.target.value = values
    fakeEvent.target.name = event.target.name

    switch (ref) {
      case '_scenariosInput':
        this.props.selectScenarios(_.map(fakeEvent.target.value, id => (parseInt(id))))
        break
      case '_indicatorsInput':
        this.props.selectIndicators(_.map(fakeEvent.target.value, id => (parseInt(id))))
        break
      default:
        break
    }
  }

  render () {
    const regionLevels = this.props.availableChoices.regionLevels
    const regions = this.props.availableChoices.regions
    const scenarioCollections = regions.length === 0 ? [] : regions.find(region => region.id === this.props.selectedChoices.region).scenarioCollections
    const scenarios = this.props.availableChoices.scenarios
    const indicatorCategories = this.props.availableChoices.indicatorCategories
    const timePeriods = this.props.availableChoices.timePeriods

    return (
      <div className={styles.sidebar}>
        <FormGroup>
          <ControlLabel>Region level</ControlLabel>
          <FormControl
            componentClass='select'
            onChange={(e) => {
              this.props.selectRegionLevel(parseInt(e.target.value))
            }}
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
            }}
            value={this.props.selectedChoices.region}>
            {_.map(regions, child => (
              <option value={child.id} key={child.id}>{child.name}</option>
            ))}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario collection</ControlLabel>
          <FormControl componentClass='select'
            onChange={(e) => {
              this.props.selectScenarioCollection(parseInt(e.target.value))
            }}
            value={this.props.selectedChoices.scenarioCollection}>
            {_.map(scenarioCollections, child => (
              <option value={child.id} key={child.id}>{child.name}</option>
            ))}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario</ControlLabel>
          <FormControl
            multiple
            name='scenarios'
            componentClass='select'
            inputRef={ref => { this._scenariosInput = ref }}
            onChange={this.handleMultipleSelectValueChange('_scenariosInput')}>
            {_.map(scenarios, child => (
              <option value={child.id} key={child.id}>{child.name}</option>
            ))}
          </FormControl>
        </FormGroup>

        {/* TODO: Fix this part, it doesnt show the categories */}
        <FormGroup>
          <ControlLabel>Indicators</ControlLabel>
          <FormControl
            multiple
            name='indicators'
            componentClass='select'
            inputRef={ref => { this._indicatorsInput = ref }}
            onChange={this.handleMultipleSelectValueChange('_indicatorsInput')}>
            {_.map(indicatorCategories, indicatorCategory => {
              return (_.map(indicatorCategory.indicators, indicator => {
                return (
                  <option value={indicator.id} key={indicator.id}>{indicator.name}</option>
                )
              }))
            })}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Period</ControlLabel>
          <FormControl
            componentClass='select'
            onChange={(e) => {
              this.props.selectPeriod(parseInt(e.target.value))
            }}
            value={this.props.selectedChoices.period}>
            {_.map(timePeriods, child => (
              <option value={child.id} key={child.id}>{child.yearStart} - {child.yearEnd}</option>
            ))}
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
  fetchScenarios: PropTypes.func.isRequired,
  selectRegionLevel: PropTypes.func.isRequired,
  selectRegion: PropTypes.func.isRequired,
  selectScenarioCollection: PropTypes.func.isRequired,
  selectScenarios: PropTypes.func.isRequired,
  selectIndicators: PropTypes.func.isRequired,
  selectPeriod: PropTypes.func.isRequired
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
  fetchScenarios,
  selectRegionLevel,
  selectRegion,
  selectScenarioCollection,
  selectScenarios,
  selectIndicators,
  selectPeriod
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Sidebar)
