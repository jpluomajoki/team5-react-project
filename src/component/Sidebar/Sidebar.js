import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.scss'
import _ from 'lodash'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { getTranslate } from 'react-localize-redux'
import {
  fetchRegionLevels,
  fetchRegions,
  fetchScenarioCollectionData,
  selectRegionLevel,
  selectRegion,
  selectScenarioCollection,
  selectScenarios,
  selectIndicators,
  selectPeriod
} from '../../actions/data'
import * as FormControlNames from 'constants/FormControls'
import * as queryStringUtils from 'utils/queryString'
import * as InformationHTML from 'constants/InformationHTML'

class Sidebar extends Component {
  static propTypes = {
    regionLevels: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
    scenarios: PropTypes.array.isRequired,
    indicatorCategories: PropTypes.array.isRequired,
    timePeriods: PropTypes.array.isRequired,
    translate: PropTypes.func.isRequired,
    selectedValues: PropTypes.object.isRequired,
    onToggleInformationModalClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    // Empty
  };

  _scenariosInput = null;
  _indicatorsInput = null;

  // Note: In order to get all the values from a multiple select when the value changes
  // we need to handle this a bit differently.
  // This handler gets all the selected values on every value change.
  // Afterwards it will recreate a 'fake' event so that we can pass it along to the parent container
  // which can handle it on it's turn, like a normal on change event.
  handleMultipleSelectValueChange = ref => event => {
    const values = [].map.call(
      this[ref].selectedOptions,
      option => option.value
    )

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
    }
  }

  // Get scenario collections from chosen region
  get scenarioCollections () {
    if (
      !this.props.regions ||
      !this.props.selectedValues[FormControlNames.REGION]) {
      return null
    }

    const chosenRegion = _.find(
      this.props.regions,
      r => String(r.id) === this.props.selectedValues[FormControlNames.REGION]
    )

    return chosenRegion ? chosenRegion.scenarioCollections : null
  }

  get melaTupaLink () {
    const { selectedValues: {
      region,
      scenarioCollection,
      scenarios,
      indicators,
      timePeriod
    } } = this.props

    if (!region || !scenarioCollection || !scenarios || !indicators || !timePeriod) {
      return null
    }

    const url = queryStringUtils.getMeluTupaUrl({
      scenarioCollectionId: scenarioCollection,
      regionId: region,
      scenarioIds: scenarios,
      indicatorIds: indicators,
      timePeriodId: timePeriod,
      language: 'fi'
    })

    console.log(url)

    return (
      <a disabled href={`http://mela2.metla.fi/mela/tupa/index.php?${url}`} target='_blank'>
        Mela Tupa
      </a>
    )
  }

  componentWillReceiveProps (newProps) {
    if (newProps.pending) {
      return
    }

    const oldSelectedValues = this.props.selectedValues
    const newSelectedValues = newProps.selectedValues

    if (oldSelectedValues.regionLevel !== newSelectedValues.regionLevel && newSelectedValues.regionLevel !== -1) {
      this.props.fetchRegions(newSelectedValues.regionLevel)
    }

    if (newSelectedValues.scenarioCollection !== oldSelectedValues.scenarioCollection && newSelectedValues.scenarioCollection !== -1) {
      this.props.fetchScenarioCollectionData(newSelectedValues.scenarioCollection, newSelectedValues.region)
    }
  }

  render () {
    const { translate, onToggleInformationModalClick, regions, selectedValues } = this.props
    const scenarioCollections = regions.length === 0
      ? []
      : regions.find(region => region.id === selectedValues.region).scenarioCollections

    return (
      <div className={styles.component}>
        <FormGroup>
          <ControlLabel>
            {translate('region level')}
            <Button
              bsStyle='link'
              name={InformationHTML.REGIONLEVEL_INDICATOR}
              onClick={onToggleInformationModalClick}>
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            name={FormControlNames.REGION_LEVEL}
            componentClass='select'
            onChange={(e) => this.props.selectRegionLevel(parseInt(e.target.value))}>
            {_.map(this.props.regionLevels, (regionLevel) => {
              return (
                <option key={regionLevel.id} value={regionLevel.id} title={regionLevel.description}>
                  {regionLevel.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('region')}
            <Button
              bsStyle='link'
              name={InformationHTML.REGION_INDICATOR}
              onClick={onToggleInformationModalClick}>
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            name={FormControlNames.REGION}
            componentClass='select'
            onChange={(e) => this.props.selectRegion(parseInt(e.target.value))}>
            {_.map(this.props.regions, (region) => {
              return (
                <option key={region.id} value={region.id} title={region.description}>
                  {region.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('scenario collection')}
            <Button
              bsStyle='link'
              name={InformationHTML.SCENARIOCOLLECTION_INDICATOR}
              onClick={onToggleInformationModalClick}>
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            name={FormControlNames.SCENARIO_COLLECTION}
            componentClass='select'
            onChange={(e) => this.props.selectScenarioCollection(parseInt(e.target.value))}>
            {_.map(scenarioCollections, (collection) => {
              return (
                <option key={collection.id} value={collection.id} title={collection.description}>
                  {collection.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('scenario')}
            <Button
              bsStyle='link'
              name={InformationHTML.SCENARIOS_INDICATOR}
              onClick={onToggleInformationModalClick}>
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            multiple
            name='scenarios'
            componentClass='select'
            inputRef={ref => (this._scenariosInput = ref)}
            onChange={this.handleMultipleSelectValueChange('_scenariosInput')}>
            {_.map(this.props.scenarios, (scenario) => {
              return (
                <option key={scenario.id} value={scenario.id} title={scenario.description}>
                  {scenario.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('indicators')}
            <Button
              bsStyle='link'
              name={InformationHTML.INDICATORS_INDICATOR}
              onClick={onToggleInformationModalClick}>
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            multiple
            name={FormControlNames.INDICATORS}
            componentClass='select'
            inputRef={ref => (this._indicatorsInput = ref)}
            onChange={this.handleMultipleSelectValueChange('_indicatorsInput')}>
            {_.map(this.props.indicatorCategories, indicatorCategory => {
              return [
                <option
                  disabled
                  key={indicatorCategory.id}>
                  ----{indicatorCategory.name}----
                </option>,
                _.map(indicatorCategory.indicators, indicator => {
                  return (
                    <option value={indicator.id} key={indicator.id} title={indicator.description}>
                      {indicator.name}
                    </option>
                  )
                })]
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('time period')}
            <Button
              bsStyle='link'
              name={InformationHTML.TIMEPERIOD_INDICATOR}
              onClick={onToggleInformationModalClick}>
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            name={FormControlNames.TIME_PERIOD}
            componentClass='select'
            onChange={(e) => this.props.selectPeriod(parseInt(e.target.value))}>
            {_.map(this.props.timePeriods, (period) => {
              return (
                <option key={period.id} value={period.id} title={period.description}>
                  {`${period.yearStart}-${period.yearEnd}`}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        {this.melaTupaLink}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  regionLevels: state.data.regionLevels,
  regions: state.data.regions,
  scenarios: state.data.scenarios,
  indicatorCategories: state.data.indicatorCategories,
  timePeriods: state.data.timePeriods,
  selectedValues: state.data.selectedValues,
  translate: getTranslate(state.locale)
})

const mapDispatchToProps = {
  fetchRegionLevels,
  fetchRegions,
  fetchScenarioCollectionData,
  selectRegionLevel,
  selectRegion,
  selectScenarioCollection,
  selectScenarios,
  selectIndicators,
  selectPeriod
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
